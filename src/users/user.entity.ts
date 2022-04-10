import {
  Table,
  Column,
  Model,
  DataType,
  Sequelize,
} from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';
@Table
export class User extends Model {
  @Column({
    type: DataType.UUID,
    allowNull: false,
    defaultValue: function () {
      return uuidv4();
    },
    primaryKey: true,
  })
  userid: string;
  @Column
  fullName: string;

  @Column
  address: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  emailId: string;

  @Column
  phoneNumber: string;

  @Column
  password: string;
}
