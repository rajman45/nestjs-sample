import {
  Injectable,
  ArgumentMetadata,
  BadRequestException,
  ValidationPipe,
  UnprocessableEntityException,
} from '@nestjs/common';
import { isArray } from 'class-validator';

@Injectable()
export class ValidateInputPipe extends ValidationPipe {
  public async transform(value: any, metadata: ArgumentMetadata) {
    try {
      return await super.transform(value, metadata);
    } catch (e) {
      if (e instanceof BadRequestException) {
        console.log('==', e.message);
        throw new UnprocessableEntityException(this.handleError(e.message));
      }
    }
  }

  private handleError(errors) {
    if (isArray(errors)) {
      return errors.map((error) => error.constraints);
    } else {
      return [{ error: errors }];
    }
  }
}
