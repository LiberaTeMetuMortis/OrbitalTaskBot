import Command from "../command_class.js";
export default new Command({
    name: "google",
    aliases: ["lmgtfy"],
    execute(_, msg) {
        const query = msg.content.split(/ +/).slice(1).join(" ")
        const encodedQuery = encodeURIComponent(query)
        msg.channel.send(`https://letmegooglethat.com/?q=${encodedQuery}`)
    },
})