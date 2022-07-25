// dummy file
import Fastify, { FastifyInstance } from "fastify";

// @ts-expect-error OK
const server: FastifyInstance = new Fastify({
	logger: true,
});

server.get('/ping', async () => {
	return 'pong';
});

await server.listen({ port: 6969 });