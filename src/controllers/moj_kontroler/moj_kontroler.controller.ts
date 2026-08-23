import { Controller, Get, Inject, Param, ParseIntPipe } from '@nestjs/common';
import { Pesma } from 'src/entity/Pesma';
import { MojServisService } from 'src/services/moj_servis/moj_servis.service';

@Controller('pesme')
export class MojKontrolerController {

    constructor(private pesme_servis : MojServisService) {}

    @Get()
    public vratiSve()
    {
        return this.pesme_servis.vratiSve()
    }

    @Get("segment1/:id")
    public vrati_pesmu(@Param("id", ParseIntPipe) id: number)
    {
        return this.pesme_servis.vratiByID(id)
    }
}
