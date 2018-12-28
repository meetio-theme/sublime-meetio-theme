/*eslint-disable semi*/
import path from "path";
import fs from "fs";

const debug = true;

function __theme(name, variation) {
    const merge = [];
    let options = {};
    fs.readdirSync(`./src/themes/${variation}/`).forEach(file => {
        if (debug) console.log(`👁  reading "${file}" file.`);
        file = path.join(__dirname, `/../src/themes/${variation}/` + file);
        fs.readFile(file, "utf8", (err, data) => {
            if (err) throw err;
            options = JSON.parse(data);
            Object.keys(options).map((optionsKey) => {
                var value = options[optionsKey];
                merge.push(value);
            });
            fs.writeFileSync(`${name}.sublime-theme`, JSON.stringify(merge, null, 4), (err) => {
                if (err) {
                    console.log(`🆘 Problme with ${name}.`);
                    console.log(err);
                }
            });
        });
    });
    console.log(`✅ theme "${name}" was saved!`);
}

export default function themes() {
    __theme("Mariana-Theme-Light", "light");
    // theme("Mariana-Theme-Dark", "dark");
}
