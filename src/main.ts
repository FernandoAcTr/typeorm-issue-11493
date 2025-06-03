import 'reflect-metadata'
import logger from './utils/logger'
import { config } from './config'
import { AppDataSource } from './database/datasources'
import { Employee } from './entities/employee.entity'
import { Contact } from './entities/contact.entity'
import { faker } from '@faker-js/faker'

console.debug('Applied config: ', config)

async function init() {
  logger.info('Starting example...')
  await AppDataSource.initialize()

  let employe = await Employee.findOneBy({ id: 477 })
  if (!employe) {
    logger.debug('Employee not found, creating a new one')
    employe = new Employee()
    employe.id = 477
    employe.employee_number = '000001'
    employe.name = 'Test Employee'
    await employe.save()
  }

  await Contact.create({
    id_employee: 477,
    name: faker.person.firstName().toUpperCase(),
  }).save()
  logger.info('Example completed successfully!')
}

init().catch((e) => {
  console.error(e)
  process.exit(1)
})
