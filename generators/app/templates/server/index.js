'use strict'

const fastify = require('fastify')
const Nextjs = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const host = process.env.HOST || '0.0.0.0'
const dev = process.env.NODE_ENV !== 'production'
const app = Nextjs({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = fastify()

  server.get('/*', (req, res) => {
    return handle(req.req, res.res)
  })

  server.listen(port, host, err => {
    if (err) throw err
    console.log(`> Ready on http://${host}:${port}`)
  })
})
