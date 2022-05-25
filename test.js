import { readFileSync, promises as fsPromises } from "fs";

// ✅ read file ASYNCHRONOUSLY
async function asyncReadFile(filename) {
    // try {
    //     const contents = await fsPromises.readFile(filename, "utf-8");
    //     console.log("hi");
    //     const arr = contents.split(/\r?\n/);

    //     console.log(arr); // 👉️ ['One', 'Two', 'Three', 'Four']
    //     for (var i = 0; i < arr.length; i++) {
    //         console.log(arr[i]);
    //     }
    //     document.getElementById("test").innerHTML = ;
    //     return arr;
    // } catch (err) {
    //     console.log(err);
    // }
    fetch("words.txt")
        .then((response) => response.text())
        .then((data) => {
            // Do something with your data
            console.log(data);
        });
}

asyncReadFile("example.txt");
