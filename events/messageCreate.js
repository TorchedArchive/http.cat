module.exports = (bot, msg) => {
	if(msg.channel.type === "dm" || msg.author.bot) return;
	const prefixes = ["http cat ", "http.cat "]
	let prefix = false;
	for(const p of prefixes) {
		if(msg.content.toLowerCase().includes(p)) prefix = p;
	}

	if(!prefix) return;
	const args = msg.content.slice(prefix.length).trim().split(" ")
	const command = args.shift().toLowerCase()
	try {
		const { codes } = require("../codes.json")
		let cmd;
		
		if(!codes.includes(command) && !bot.commands.has(command)) return;
		cmd = codes[codes.indexOf(command)] || bot.commands.get(command)
		if(!isNaN(parseInt(cmd))) {
			msg.channel.createMessage({embed: {
				color: 0x38B1D0,
				image: {
					url: `https://http.cat/${command}.jpg`
				}
			}})
		} else {
			cmd.run(bot, msg, args)
		}
	} catch(err) {
		console.error(err)
	}
}