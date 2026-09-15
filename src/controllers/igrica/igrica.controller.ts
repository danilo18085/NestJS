import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import type { Filter } from 'src/Interfaces/Filter';
import type { IgricaModel } from 'src/Interfaces/IgricaModel';
import { IgricaService } from 'src/services/igrica/igrica.service';

@Controller('igrica')
export class IgricaController {

    constructor(private igrica_service : IgricaService) {}

    @Get()
    public vrati_sve_igre()
    {
        return this.igrica_service.vrati_sve_igre()
    }

    @Get("igrice_filter")
    public vrati_igre_sa_filterom(@Query() filter : Filter)
    {
        return this.igrica_service.vrati_igre_sa_filterom(filter)
    }

    @Post("dodaj_igricu/:username/:token")
    public dodaj_igricu(@Body() igra : IgricaModel, @Param("username") user : string, @Param("token") token : string)
    {
        return this.igrica_service.dodaj_igricu(igra, user, token)
    }
}
