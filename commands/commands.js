exports.run = (bot, msg, args) => {
	const dev = bot.users.get("439373663905513473")
	const cmds = bot.commands.map(c => `\`${c.info.name}\` - ${c.info.description}`).join("\n")
	msg.channel.createMessage({embed: {
		color: 0x38B1D0,
		thumbnail: {
			url: bot.user.avatarURL.replace("128", "512").replace("jpg", "png")
		},
		description: `The available commands are:
		
		${cmds}`,
		footer: {
			icon_url: msg.author.avatarURL,
			text: `Requested by ${msg.author.username}#${msg.author.discriminator} \nImages from https://http.cat and bot by ${dev.username}#${dev.discriminator}`
		},
		timestamp: new Date()
	}})
}

exports.info = {
	name: "commands",
	description: "Gives a list of commands."
}