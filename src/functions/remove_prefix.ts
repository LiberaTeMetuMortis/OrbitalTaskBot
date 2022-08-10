export default function(message: string, prefix: string): string{
    return message.slice(prefix.length)
}