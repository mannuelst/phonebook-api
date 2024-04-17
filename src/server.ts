import { fastify, FastifyInstance } from "fastify";
import { contactRoutes } from "./routes/contact.routes";
import { userRoutes } from "./routes/user.routes";

const server: FastifyInstance = fastify({ logger: true })
let _port = process.env.PORT ?? 3000

server.register(userRoutes, {
    prefix: 'users'

})
server.register(contactRoutes, {
    prefix: "contacts"
})
server.listen({ port: _port }, () => {
    console.log(`Server is up on ${_port}`)
})