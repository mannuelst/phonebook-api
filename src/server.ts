import { fastify, FastifyInstance } from "fastify";
let _port = process.env.PORT ?? 3000
const server: FastifyInstance = fastify()


server.listen({ port: _port }).then(
    () => {

        console.log(`Server is up on ${_port}`)
    }
)