import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MojServisService } from './services/moj_servis/moj_servis.service';
import { MojKontrolerController } from './controllers/moj_kontroler/moj_kontroler.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pesma } from './entity/Pesma';

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
        entities: [Pesma],
        synchronize: true,
      })
    }),
    TypeOrmModule.forFeature([Pesma]),
  ],

  controllers: [AppController, MojKontrolerController],
  providers: [AppService, MojServisService],
})
export class AppModule {}
