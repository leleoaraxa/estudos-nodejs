import { knex as setupKnex, Knex } from 'knex'
import { env } from './env'

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL env not found.')
}

export const config: Knex.Config = {
  client: 'mysql2',
  connection: env.DATABASE_URL,
  migrations: {
    extension: 'ts',
    directory: './migrations',
    tableName: 'knex_migrations',
  },
}

export const knex = setupKnex(config)
