import {
  BaseEntity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

export class BaseSchema extends BaseEntity {
  @Column({ type: 'json', nullable: true, select: false })
  extras: Record<string, unknown>;

  @CreateDateColumn({
    default: () => 'CURRENT_TIMESTAMP(6)',
    type: 'timestamp',
  })
  createdAt: Date;

  @UpdateDateColumn({
    default: () => 'CURRENT_TIMESTAMP(6)',
    type: 'timestamp',
    select: false,
  })
  updatedAt: Date;

  @DeleteDateColumn({ select: false })
  deletedAt: Date;
}
