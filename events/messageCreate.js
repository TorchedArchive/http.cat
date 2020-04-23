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
		const codes = ["200"]
		let cmd;
		
		if(!codes.includes(command) && !bot.commands.has(command)) return;
		cmd = codes[codes.indexOf(command)] || bot.commands.get(command)
		console.log(cmd)
	} catch(err) {
		console.error(err)
	}
}