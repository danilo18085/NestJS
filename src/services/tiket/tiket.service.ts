import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tiket } from 'src/Entity/Tiket';
import { Repository } from 'typeorm';
import { TokenService } from '../token/token.service';

@Injectable()
export class TiketService 
{
    constructor(@InjectRepository(Tiket) private tiket_repository : Repository<Tiket>,
                                         private token_service : TokenService) {}

    napravi_tiket(tiket : Tiket)
    {
        console.log(tiket)
        const novi_tiket = this.tiket_repository.create(tiket)
        return this.tiket_repository.save(novi_tiket)
    }

    async vrati_tikete(username : string, token : string)
    {
        if(await this.token_service.validuj_token(username, token))
        {
            const rez = this.tiket_repository.find()
            return rez
        }
            
        else
            return null
    }

}
