import { Module } from '@nestjs/common';
import { OffersController } from './offers.controller';
import { OffersService } from './offers.service';
import { offersProviders } from './offers.providers';
import { DatabaseModule } from '../database/database.module';
@Module({
  imports: [DatabaseModule],
  controllers: [OffersController],
  providers: [OffersService, ...offersProviders],
})
export class OffersModule {}
