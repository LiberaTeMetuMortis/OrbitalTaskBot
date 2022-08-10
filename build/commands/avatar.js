import Command from "../command_class.js";
export default new Command({
    name: "avatar",
    aliases: ["av"],
    async execute(_, msg) {
        msg.mentions.users.size > 0 ? msg.channel.send(msg.mentions.users.first().avatarURL()) : msg.channel.send(msg.author.avatarURL());
    }
});
//# sourceMappingURL=avatar.js.map