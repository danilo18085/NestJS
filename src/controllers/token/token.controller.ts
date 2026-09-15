import { Body, Controller, Delete, Post } from '@nestjs/common';
import { Admin } from 'src/Entity/Admin';
import { TokenService } from 'src/services/token/token.service';

@Controller('token')
export class TokenController 
{
    constructor(private token_service : TokenService) {}


    @Post("generisi_token")
    public generisi_token(@Body() admin : Admin)
    {
        return this.token_service.generisi_token(admin.username, admin.password)
    }

    @Delete("obrisi_token")
    public obrisi_token(@Body() admin : Admin)
    {
        return this.token_service.obrisi_token(admin.username)
    }
}
