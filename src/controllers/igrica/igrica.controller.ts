import { Controller, Get, Query } from '@nestjs/common';
import type { Filter } from 'src/Interfaces/Filter';
import { IgricaService } from 'src/services/igrica/igrica.service';

@Controller('igrica')
export class IgricaController {

    constructor(private igrica_service : IgricaService) {}

    @Get()
    public vrati_sve_igre()
    {
        return this.igrica_service.vrati_sve_igre()
    }

    @Get("segment123")
    public vrati_igre_sa_filterom(@Query() filter : Filter)
    {
        return this.igrica_service.vrati_igre_sa_filterom(filter)
    }
}
