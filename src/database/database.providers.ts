import { Sequelize } from 'sequelize-typescript';
import { User } from '../users/user.entity';
import { Offer } from '../offers/offer.entity';
import * as dotenv from 'dotenv';
import { getEnvPath } from '../configs/helper/env.helper';
const envFilePath: string = getEnvPath(`${__dirname}/../configs/envs`);

dotenv.config({ path: envFilePath });

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: '',
        password: '',
        database: 'assignment',
      });
      sequelize.addModels([User, Offer]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
