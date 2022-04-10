import { Inject, Injectable } from '@nestjs/common';
import { Offer } from './offer.entity';
import { User } from '../users/user.entity';

@Injectable()
export class OffersService {
  constructor(
    @Inject('OFFERS_REPOSITORY') private readonly offerRepository: typeof Offer,
  ) {}

  async create(user: any): Promise<Offer> {
    return await this.offerRepository.create<Offer>(user);
  }

  async findOneByuserId(userId: string): Promise<Offer> {
    return await this.offerRepository.findOne<Offer>({ where: { userId } });
  }

  async findOneById(id: number): Promise<Offer> {
    return await this.offerRepository.findOne<Offer>({
      where: { id },
    });
  }
  async findAll(): Promise<Offer[]> {
    return this.offerRepository.findAll<Offer>({
      include: [{ model: User, attributes: { exclude: ['password'] } }],
    });
  }
  async update(offerid: string, data) {
    return await this.offerRepository.update(
      { ...data },
      { where: { offerid }, returning: true },
    );
  }
  async delete(offerid: string) {
    return await this.offerRepository.destroy({ where: { offerid } });
  }
}
