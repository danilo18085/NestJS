import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Tiket } from 'src/Entity/Tiket';
import { TiketService } from 'src/services/tiket/tiket.service';

@Controller('tiket')
export class TiketController 
{

    constructor(private tiket_service : TiketService) {}

    @Post("napravi_tiket")
    napravi_tiket(@Body() tiket : Tiket)
    {
        console.log("stigao je tiket: " + tiket)
        this.tiket_service.napravi_tiket(tiket)
    }

    @Get("vrati_tikete/:username/:token")
    vrati_tikete(@Param("username") username : string, @Param("token") token : string)
    {
        return this.tiket_service.vrati_tikete(username, token)
    }

    @Delete("izbrisi_tiket/:id/:username/:token")
    public izbrisi_igricu(@Param("id") id : string, @Param("username") username : string, @Param("token") token : string )
    {
        this.tiket_service.izbrisi_tiket(Number(id), username, token)
    }
}
