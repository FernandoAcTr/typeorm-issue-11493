import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Employee } from './employee.entity'

@Entity('Contacts')
export class Contact extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: 'id_employee', type: 'int' })
  id_employee: number

  @Column()
  name: string

  @ManyToOne(() => Employee)
  @JoinColumn({ name: 'id_employee' })
  empleado: Employee
}
