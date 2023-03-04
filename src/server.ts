import { app } from './app'
import { env } from './env'
import { pingRoutes } from './routes/ping'

// Health check application
app.register(pingRoutes, { prefix: 'ping' })

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
