import { Body, Controller, Post } from '@nestjs/common';
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
}
