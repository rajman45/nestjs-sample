import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
  UseGuards,
  Request,
} from '@nestjs/common';
import { OffersService } from './offers.service';
import { Offer } from './offer.entity';
import { OfferDto } from './offer.dto';

@Controller('offers')
export class OffersController {
  constructor(private readonly offerService: OffersService) {}
  @Get()
  getList(): any {
    return this.offerService.findAll();
  }

  @Post()
  async create(@Body() post: OfferDto, @Request() req): Promise<Offer> {
    return await this.offerService.create(post);
  }
  @Put(':id')
  async update(
    @Param('id') offerid: string,
    @Body() post: OfferDto,
    @Request() req,
  ): Promise<any> {
    return await this.offerService.update(offerid, post);
  }
  @Delete(':id')
  async delete(@Param('id') offerid: string, @Request() req): Promise<any> {
    return await this.offerService.delete(offerid);
  }
}
