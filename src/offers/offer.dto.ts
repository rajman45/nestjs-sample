import { IsNotEmpty, IsDate ,maxDate, IsAlpha, IsAlphanumeric,MaxLength, Matches} from 'class-validator';
export class OfferDto {
  // @IsNotEmpty()
  readonly offerid: string;
  @IsNotEmpty()
  @IsAlpha()
  @MaxLength(20)
  readonly offerName: string;
 // @Matches('[a-z\d\-_\s]+$/i')
  @MaxLength(20)
  readonly offerDesc: string;
  //@IsNotEmpty()
  
  //@IsDate()
  //@maxDate(new Date())
  readonly startDate: Date;
  readonly endDate: Date;
  readonly userId: string;
}
