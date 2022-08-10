import Command from "../command_class.js"
import * as fs from "fs/promises"
export default new Command({
    name: "github",
    aliases: ["gh"],
    async execute(_, msg){
        let query = msg.content.split(" ").slice(1).join(" ")
        if(query.match(/(?:https?:\/\/)?(?:www\.)?github.com\/.+/)){
            query = query.replace(/(?:https?:\/\/)?(?:www\.)?github.com\//, "").replace("/blob", "")
        }
        else if(query.match(/(?:https?:\/\/)?(?:www\.)?raw\.githubusercontent\.com\/.+/)){
            query = query.replace(/(?:https?:\/\/)?(?:www\.)?raw\.githubusercontent\.com\//, "")
        }
        else{
            msg.channel.send("Please provide a GitHub link.\nExample: https://raw.githubusercontent.com/MetuMortis/KotlinSpigotPluginTemplate/blob/master/README.md")
            return;
        }
        let data = await fetch(`https://raw.githubusercontent.com/${query}`)
        let text = await data.text()
        const queryArgs = query.split("/")
        const [owner, repo, path] = queryArgs
        if(text === "Not Found" || text === "400: Invalid request"){
            data = await fetch(`https://raw.githubusercontent.com/${owner}/${repo}/master/${path}`)
            text = await data.text()
        }
        if(text === "Not Found" || text === "400: Invalid request"){
            data = await fetch(`https://raw.githubusercontent.com/${owner}/${repo}/main/${path}`)
            text = await data.text()
        }
        const fileName = query.split("/").at(-1) 
        await fs.writeFile("./build/temp/" + fileName, await text)
        await msg.channel.send({ files: [`./build/temp/${fileName}`] })
        await fs.unlink("./build/temp/" + fileName)
    }
})