exports.run = (bot, msg) => {
	msg.channel.createMessage("Pong!")
}

exports.info = {
	name: "ping",
	description: "See the bot response time."
}