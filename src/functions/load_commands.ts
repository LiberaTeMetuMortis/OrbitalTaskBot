import * as fs from "fs/promises"
import Command, { executor } from "../command_class.js"

const commandFolder = await fs.readdir("./build/commands/")
export default async function(commandMap: Map<string, executor>){
    for (const file of commandFolder.filter(command => command.endsWith(".js"))) {
        const { default: command } = await import(`../commands/${file}`) as { default: Command }
        commandMap.set(command.name.toLowerCase(), command.execute)
        console.log(`Command ${command.name} loaded`)
        command.aliases.map(alias => alias.toLowerCase()).forEach(alias => commandMap.set(alias, command.execute))
    }
}
