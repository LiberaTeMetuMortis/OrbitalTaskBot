import config from "./config.json" assert { type: "json" };
import * as dotenv from "dotenv";
import { Client } from "discord.js";
import loadCommands from "./functions/load_commands.js";
import hasPrefix from "./functions/has_prefix.js";
import removePrefix from "./functions/remove_prefix.js";
import callCommand from "./functions/call_command.js";
dotenv.config();
const client = new Client({
    intents: ["GuildMembers", "MessageContent", "GuildMessages", "Guilds"]
});
const commandMap = new Map();
client.on('ready', async () => {
    console.log(`Logged in as ${client.user?.tag}`);
    await loadCommands(commandMap);
});
client.on('messageCreate', (msg) => {
    if (!hasPrefix(msg.content, config.prefix))
        return;
    const command = removePrefix(msg.content, config.prefix).split(" ")[0];
    callCommand({
        command,
        config,
        msg,
        commandMap,
        client
    });
});
client.login(process.env.TOKEN);
//# sourceMappingURL=index.js.map