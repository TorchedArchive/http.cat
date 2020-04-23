const Eris = require("eris")
require("dotenv").config()
const bot = new Eris(process.env.TOKEN)

bot.commands = new Map()

try {
	let files = require("fs").readdirSync("./events").filter(f => f.split(".").pop() === "js")
	if(files.length === 0) {
		console.log("No events to load!")
	} else {
		let e = 0;
		for(let i = 0; i < files.length; i++) {
			const _event = files[i].slice(0, -3)
			try {
				const event = require(`./events/${files[i]}`)
				bot.on(_event, event.bind(null, bot))
				console.log(`Successfully loaded event ${_event}.`)
				e++
			} catch(err) {
				const trace = err.stack.toString().split("\n").slice(0, 3).join("\n")
				console.log(`An error occurred while trying to load ${_event}\n${trace}`)
				console.log(`Could not load the event ${_event}.`)
			}
		}
		console.log(`Loaded ${e} events.`)
	}
} catch(err) {
	console.error(err)
}

bot.connect()