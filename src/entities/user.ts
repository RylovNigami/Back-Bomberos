import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: `varchar` })
  firstname!: string;

  @Column({ type: `varchar` })
  lastname!: string;

  @Column({
    default: true,
  })
  active: boolean;

  @CreateDateColumn({ type: `date` })
  createdAt!: Date;

  @UpdateDateColumn({ type: `date` })
  updatedAd!: Date;
}
