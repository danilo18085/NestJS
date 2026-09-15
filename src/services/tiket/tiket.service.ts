import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tiket } from 'src/Entity/Tiket';
import { Repository } from 'typeorm';

@Injectable()
export class TiketService 
{
    constructor(@InjectRepository(Tiket) private tiket_repository : Repository<Tiket>) {}

    napravi_tiket(tiket : Tiket)
    {
        console.log(tiket)
        const novi_tiket = this.tiket_repository.create(tiket)
        return this.tiket_repository.save(novi_tiket)
    }

}
