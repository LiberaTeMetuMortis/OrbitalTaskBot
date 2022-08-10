export default function ({ command, config, msg, commandMap, client }) {
    if (commandMap.has(command.toLowerCase())) {
        commandMap.get(command.toLowerCase()).call(null, config.prefix, msg, client);
    }
}
//# sourceMappingURL=call_command.js.map