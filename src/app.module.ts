import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

/*
import { UsersController } from './users/users.controller';
import { OffersController } from './offers/offers.controller';
import { UsersService } from './users/users.service';
import { OffersService } from './offers/offers.service';
*/
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { OffersModule } from './offers/offers.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    //AuthModule,
    UsersModule,
    OffersModule,
  ],
  controllers: [AppController /*, UsersController, OffersController*/],
  providers: [AppService /*, UsersService, OffersService*/],
})
export class AppModule {}
