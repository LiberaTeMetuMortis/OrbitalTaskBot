import { Client, Message } from "discord.js";
import { executor } from "../command_class.js";
interface CallCommandInterface{
    command: string 
    config: { prefix: string }
    msg: Message 
    client: Client
    commandMap: Map<string, executor>
}
export default function({ command, config, msg, commandMap, client }: CallCommandInterface){
    if(commandMap.has(command.toLowerCase())){
        commandMap.get(command.toLowerCase())!.call(null, config.prefix, msg, client)
    }
}