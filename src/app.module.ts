import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Igrica } from './Entity/Igrica';
import { IgricaService } from './services/igrica/igrica.service';
import { IgricaController } from './Controllers/igrica/igrica.controller';
import { Admin } from './Entity/Admin';
import { Tiket } from './Entity/Tiket';
import { Token } from './Entity/Token';

@Module({
  imports: [ConfigModule.forRoot({
      isGlobal: true, 
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: 'localhost',
        port: configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [Igrica, Admin, Tiket, Token],
        synchronize: true,
      })
    }),
    TypeOrmModule.forFeature([Igrica, Admin, Tiket, Token]),
  ],

  controllers: [AppController, IgricaController],
  providers: [AppService, IgricaService],
})
export class AppModule {}
