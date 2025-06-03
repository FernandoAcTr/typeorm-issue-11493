import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm'

@Entity('Employees')
export class Employee extends BaseEntity {
  @PrimaryColumn()
  id: number

  @PrimaryColumn()
  noempx: string

  @Column()
  name: string
}
