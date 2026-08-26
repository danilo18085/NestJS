import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pesma } from 'src/Entity/Pesma';
import { Repository } from 'typeorm';

@Injectable()
export class MojServisService {

    constructor(@InjectRepository(Pesma) 
                private songRepository: Repository<Pesma>) {}

    

    public vratiSve()
    {
        return this.songRepository.find()
    }

    public vratiByID(id : number)
    {
        this.songRepository.findOne({ where: { id: id } })
    }
}
