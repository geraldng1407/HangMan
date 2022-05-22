import { readFileSync, promises as fsPromises } from "fs";

// ✅ read file ASYNCHRONOUSLY
async function asyncReadFile(filename) {
    try {
        const contents = await fsPromises.readFile(filename, "utf-8");
        console.log("hi");
        const arr = contents.split(/\r?\n/);

        console.log(arr); // 👉️ ['One', 'Two', 'Three', 'Four']
        for (var i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
        return arr;
    } catch (err) {
        console.log(err);
    }
}

asyncReadFile("example.txt");
