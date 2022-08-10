import Command from "../command_class.js";
import { EmbedBuilder } from "discord.js";
export default new Command({
    name: "coinflip",
    aliases: ["coin-flip", "cf"],
    execute(_, msg){
        const embed = new EmbedBuilder()
        if(Math.random() <= 0.5){
            embed.setColor("Green")
            embed.setTitle("You won!")
        }
        else {
            embed.setColor("Red")
            embed.setTitle("You lost!")
        }
        msg.channel.send({ embeds: [embed] })
    }
})