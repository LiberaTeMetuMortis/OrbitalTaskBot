import * as fs from "fs/promises";
export default async function exists(path) {
    try {
        await fs.access(path);
        return true;
    }
    catch {
        return false;
    }
}
//# sourceMappingURL=file_exists.js.map