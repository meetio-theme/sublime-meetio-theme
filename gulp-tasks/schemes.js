/*eslint-disable semi*/
import path from "path";
import fs from "fs";

const debug = true;

function __schemes() {
    let filePath;
    fs.readdirSync("./src/schemes/").forEach(file => {
        if (debug) console.log(`👁  - Reading ${file} file.`);
        filePath = path.join(__dirname, "/../src/schemes/" + file);
        fs.readFile(filePath, "utf8", (err, data) => {
            if (err) throw err;
            fs.writeFileSync(`schemes/${file}.sublime-color-scheme`, data, (err) => {
                if (err) {
                    console.log(`🆘 - Problme with ${file}.`);
                    console.log(err);
                }
            });
            console.log(`✅ - Scheme: ${file} was saved!`);
        });
    });
}

export default function schemes() {
    __schemes();
}
