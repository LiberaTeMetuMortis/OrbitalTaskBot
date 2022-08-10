import { Client, Message } from "discord.js";

interface CommandInterface {
    name: string;
    aliases: string[];
    execute: executor
}

class Command implements CommandInterface {
    name: string;
    aliases: string[];
    execute: executor
    
    constructor({ name, aliases = [], execute }: CommandInterface){
        this.name = name;
        this.aliases = aliases;
        this.execute = execute;
    }
}

export default Command;
export type executor = (prefix: string, msg: Message, client: Client) => void