exports.run = (bot, msg) => {
	const dev = bot.users.get("439373663905513473")
	msg.channel.createMessage({embed: {
		color: 0x38B1D0,
		thumbnail: {
			url: bot.user.avatarURL.replace("128", "512").replace("jpg", "png")
		},
		description: `[http.cat](https://http.cat) is a site to look at HTTP codes with cat images, and this bot shows you exactly that.
		To get started using it, you can run \`http.cat 200\` as an example. The format is \`http.cat <code>\` and works with any HTTP code.

		And to look at the other commands I have, you can run \`http.cat commands\` for a list of them.`,
		footer: {
			icon_url: msg.author.avatarURL,
			text: `Requested by ${msg.author.username}#${msg.author.discriminator} \nImages from https://http.cat and bot by ${dev.username}#${dev.discriminator}`
		},
		timestamp: new Date()
	}})
}

exports.info = {
	name: "help",
	description: "See some help and info about the bot."
}