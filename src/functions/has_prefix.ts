export default function hasPrefix(message: string, prefix: string): boolean{
    return message.toLowerCase().startsWith(prefix.toLowerCase())
}