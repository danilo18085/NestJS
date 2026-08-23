import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pesma } from 'src/entity/Pesma';
import { Repository } from 'typeorm';

@Injectable()
export class MojServisService {

    constructor(@InjectRepository(Pesma) 
                private songRepository: Repository<Pesma>) {}

    private lista : Pesma[] = [
    
    {
        id: 1, 
        naziv: "Pustinja", 
        godina: 1995
    }, 
    {
        id: 2, 
        naziv: "Pesma od bola", 
        godina: 1996
    }, 
    {
        id: 3, 
        naziv: "Ista kao ja", 
        godina: 2000
    }, 
    {
        id: 4, 
        naziv: "Civas", 
        godina: 2001
    },
    {
        id: 5,
        naziv: "Nisam preziveo",
        godina: 2003
    }
    ]

    public vratiSve()
    {
        return this.songRepository.find()
    }

    public vratiByID(id : number)
    {
        this.songRepository.findOne({ where: { id: id } })
    }
}
