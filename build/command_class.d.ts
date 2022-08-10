import { Client, Message } from "discord.js";
interface CommandInterface {
    name: string;
    aliases: string[];
    execute: executor;
}
declare class Command implements CommandInterface {
    name: string;
    aliases: string[];
    execute: executor;
    constructor({ name, aliases, execute }: CommandInterface);
}
export default Command;
export declare type executor = (prefix: string, msg: Message, client: Client) => void;
