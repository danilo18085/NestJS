import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Igrica } from 'src/Entity/Igrica';
import { Filter } from 'src/Interfaces/Filter';
import { Repository } from 'typeorm';

@Injectable()
export class IgricaService {

    constructor(@InjectRepository(Igrica) private igra_repository : Repository<Igrica>) {}

    public vrati_sve_igre()
    {
        return this.igra_repository.find()
    }

    public vrati_igre_sa_filterom(filter : Filter)
    {
        const query = this.igra_repository.createQueryBuilder('igrica');

         const zanrNiz = typeof filter.zanr === 'string' 
            ? (filter.zanr as string).split(',').filter(z => z.length > 0)
            : filter.zanr

        if (filter.zanr.length !== 0) 
        {
          query.andWhere('igrica.zanr IN (:...zanrovi)', { zanrovi: zanrNiz })
        }
    
        if (filter.search.length !== 0) 
        {
          query.andWhere('LOWER(igrica.ime) LIKE :search', { 
            search: `%${filter.search.toLowerCase()}%` 
          })
        }
    
        if (filter.max_cena !== 100) 
        {
          query.andWhere(
            'igrica.osnovna_cena <= :maxCena',
            { maxCena: filter.max_cena }
          )
        }
    
        return query.getMany();
    }
}
