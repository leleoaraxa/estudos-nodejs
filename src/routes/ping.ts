import { FastifyInstance } from 'fastify'

export async function pingRoutes(app: FastifyInstance) {
  app.get('/', async (request, reply) => {
    return 'pong'
  })
}
