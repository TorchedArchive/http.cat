const fetch = require("node-fetch")

exports.run = async (bot, msg) => {
	const res = await fetch("http://aws.random.cat/meow").then(r => r.json())
	msg.channel.createMessage({embed: {
		color: 0x38B1D0,
		image: {
			url: res.file
		}
	}})
}

exports.info = {
	name: "cat",
	description: "Find a random and normal cat image."
}