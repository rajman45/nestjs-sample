import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../users/user.entity';
@Table
export class Offer extends Model {
  @Column({
    type: DataType.UUID,
    allowNull: false,
    defaultValue: function () {
      return uuidv4();
    },
    primaryKey: true,
  })
  offerid: string;
  @Column
  offerName: string;

  @Column
  offerDesc: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  startDate: Date;

  @Column({
    type: DataType.DATE,
  })
  endDate: Date;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  userId: string;

  @BelongsTo(() => User)
  user: User;
}
