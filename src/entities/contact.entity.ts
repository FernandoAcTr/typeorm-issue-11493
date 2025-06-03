import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Employee } from './employee.entity'

@Entity('Contacts')
export class Contact extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: 'Id_Emp', type: 'int' })
  id_emp: number

  @Column()
  name: string

  @ManyToOne(() => Employee)
  @JoinColumn({ name: 'Id_Emp' })
  empleado: Employee
}
