import * as fs from "fs/promises";
const commandFolder = await fs.readdir("./build/commands/");
export default async function (commandMap) {
    for (const file of commandFolder.filter(command => command.endsWith(".js"))) {
        const { default: command } = await import(`../commands/${file}`);
        commandMap.set(command.name.toLowerCase(), command.execute);
        console.log(`Command ${command.name} loaded`);
        command.aliases.map(alias => alias.toLowerCase()).forEach(alias => commandMap.set(alias, command.execute));
    }
}
//# sourceMappingURL=load_commands.js.map