import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm'

@Entity('Employees')
export class Employee extends BaseEntity {
  @PrimaryColumn()
  id: number

  @Column()
  employee_number: string

  @Column()
  name: string
}
