const asyncRedis = require("async-redis");
const client = asyncRedis.createClient({ url: 'redis://redis:6379' });

client.on("error", function (error) {
	console.error("ERROR OCCURED : reddis", error);
});
client.on("connect", () => {
	console.log('\033[32m',"Redis connection established" ,'\033[0m');
});

module.exports = {
	client
}