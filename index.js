const Eris = require("eris")
require("dotenv").config()
const bot = new Eris(process.env.TOKEN)

bot.connect()