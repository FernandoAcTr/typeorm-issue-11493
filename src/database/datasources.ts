import { DataSource } from 'typeorm'
import { config } from '@/config'
import { Contact } from '@/entities/contact.entity'
import { Employee } from '@/entities/employee.entity'

const { DB } = config

export const AppDataSource = new DataSource({
  type: 'mssql',
  host: DB.HOST,
  port: Number(DB.PORT),
  username: DB.USER,
  password: DB.PASSWORD,
  database: DB.NAME,
  synchronize: false,
  logging: false,
  entities: [Contact, Employee],
  extra: {
    trustServerCertificate: true,
  },
  options: {
    encrypt: DB.SSL,
  },
})
