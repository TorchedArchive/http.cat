module.exports = (bot, msg) => {
	if(msg.content.includes("hi")) {
		msg.channel.createMessage("hello!")
	}
}