import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Igrica } from 'src/Entity/Igrica';
import { Repository } from 'typeorm';

@Injectable()
export class IgricaService {

    constructor(@InjectRepository(Igrica) private igra_repository : Repository<Igrica>) {}

    public vrati_sve_igre()
    {
        return this.igra_repository.find()
    }
}
