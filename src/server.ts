import { fastify, FastifyInstance } from "fastify";

const server: FastifyInstance = fastify()
let _port = process.env.PORT ?? 3000

server.listen({ port: _port }, () => {
    console.log(`Server is up on ${_port}`)
})