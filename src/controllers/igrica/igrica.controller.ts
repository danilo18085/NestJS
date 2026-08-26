import { Controller, Get } from '@nestjs/common';
import { IgricaService } from 'src/services/igrica/igrica.service';

@Controller('igrica')
export class IgricaController {

    constructor(private igrica_service : IgricaService) {}

    @Get()
    public vrati_sve_igre()
    {
        return this.igrica_service.vrati_sve_igre()
    }
}
