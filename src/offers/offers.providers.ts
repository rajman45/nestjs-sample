import { Offer } from './offer.entity';

export const offersProviders = [
  {
    provide: 'OFFERS_REPOSITORY',
    useValue: Offer,
  },
];
