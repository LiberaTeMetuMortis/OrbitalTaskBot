class Command {
    name;
    aliases;
    execute;
    constructor({ name, aliases = [], execute }) {
        this.name = name;
        this.aliases = aliases;
        this.execute = execute;
    }
}
export default Command;
//# sourceMappingURL=command_class.js.map