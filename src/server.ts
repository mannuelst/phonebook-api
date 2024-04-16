import { fastify, FastifyInstance } from "fastify";
import { userRoutes } from "./routes/user.routes";

const server: FastifyInstance = fastify({ logger: true })
let _port = process.env.PORT ?? 3000

server.register(userRoutes, {
    prefix: 'users'

})

server.listen({ port: _port }, () => {
    console.log(`Server is up on ${_port}`)
})