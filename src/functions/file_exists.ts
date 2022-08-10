import * as fs from "fs/promises"
export default async function exists (path: string) {  
    try {
      await fs.access(path)
      return true
    } catch {
      return false
    }
}