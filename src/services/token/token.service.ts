import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from 'src/Entity/Admin';
import { Token } from 'src/Entity/Token';
import { Repository } from 'typeorm';
import * as crypto from 'crypto';
import { TokenModel } from 'src/Interfaces/TokenModel';



@Injectable()
export class TokenService 
{
    constructor(@InjectRepository(Token) private token_repository : Repository<Token>,
                @InjectRepository(Admin) private admin_repository : Repository<Admin>) {}

    

    async generisi_token(username : string, password : string)
    {
        const admin = await this.admin_repository.findOne({
            where: { username, password },
        })


        if(admin !== null)
        {
            const algoritam = 'aes-256-cbc'
            const iv = crypto.randomBytes(16)
            const key = crypto.randomBytes(32)

            const cipher = crypto.createCipheriv(algoritam, key, iv)
            const vreme = new Date()

            let enkriptovano = cipher.update(username + password + vreme.toLocaleString(), 'utf8', 'hex')
            enkriptovano += cipher.final('hex')

            const zaPolaSata = new Date(vreme.getTime() + 30 * 60 * 1000)

            const novi_token : TokenModel = 
            {
                username_admina: username,
                vrednost_tokena: enkriptovano,
                vreme_isteka: zaPolaSata,
            }

            const query = this.token_repository.create(novi_token)
            return this.token_repository.save(query)
        }

        return null
    }

    async obrisi_token(username_admina : string)
    {
        const token = await this.token_repository.findOne({
            where: { username_admina }
        })

        if (token === null)
            return
        else
            this.token_repository.remove(token)
    }

    async validuj_token(username_admina : string, token : string) : Promise<boolean>
    {
        const token_vracen : (TokenModel | null) = await this.token_repository.findOne(
            {
                where: {username_admina}
            }
        )

        if(token_vracen === null)
        {console.log("false jer nije vracen token iz baze"); return false}
            //return false

        if(token_vracen.vrednost_tokena !== token)
        {console.log("vracen jer se vrednost tokena ne poklapa"); return false}
            //return false

        const sadasnje_vreme = new Date()
        if(token_vracen.vreme_isteka <= sadasnje_vreme)
        {console.log("false jer vreme"); return false}
            //return false

        return true
    }

}
