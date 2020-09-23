const fastify = require('fastify')({ logger: false });
const { client } = require('./redis_config.js');
const shortid = require('shortid');

(async () => {
	fastify.register(require('middie'))
		.then(() => fastify.use(require('cors')()))
		.catch(err => console.error("ERROR OCCURED: cors", err))
})();

// Routes
fastify.get('/:id', async (request, reply) => {
	try {
		let link = await client.get(request.params.id);
		if (link === null) throw new Error('Invalid link');
		reply.redirect(link);
	} catch (error) {
		reply.send({ error: true, message: error.message });
	}
})

fastify.post('/:link', async (request, reply) => {
	try {
		if (!request.body.link) throw new Error('Unable to shorten that link. It is not a valid url.');
		let link = request.body.link;
		// link validation
		const regex = new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi);
		if(!link.match(regex)) throw new Error('Unable to shorten that link. It is not a valid url.');
		// second validation if starts with http or https
		if(!link.startsWith('http://') && !link.startsWith('https://'))
			link = "http://"+link;
		// add to db
		let id = shortid.generate();
		await client.set(id, link);
		reply.send({ error: false, link: 'http://localhost:3000/' + id });
	} catch (error) {
		reply.send({ error: true, message: error.message });
	}
});

// Run the server!
(async () => {
	try {
		await fastify.listen(3000, '0.0.0.0');
		console.log('\033[32m', "Server started at http://localhost:3000/", '\033[0m');
	} catch (err) {
		console.error("Error occured " ,err)
		process.exit(1)
	}
})();