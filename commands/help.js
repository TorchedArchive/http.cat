exports.run = (bot, msg, args) => {
	msg.channel.createMessage({embed: {
		color: 0x38B1D0,
		thumbnail: {
			url: bot.user.avatarURL.replace("128", "512").replace("jpg", "png")
		},
		description: "[http.cat](https://http.cat) is a site to look at HTTP codes with cat images, and the bot provides you with exactly that also.\nIf you want a command list, run `http.cat commands` and if you want to see a code run `http.cat <code>`."
	}})
}

exports.info = {
	name: "help"
}