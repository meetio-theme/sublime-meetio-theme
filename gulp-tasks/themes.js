/*eslint-disable semi*/
import path from "path";
import fs from "fs";

function __theme(name, folder) {
    const merge = [];
    let options = {};
    fs.readdirSync(`./src/themes/${folder}/`).forEach(file => {
        file = path.join(__dirname, `/../src/themes/${folder}/` + file);
        fs.readFile(file, "utf8", (err, data) => {
            if (err) throw err;
            options = JSON.parse(data);
            Object.keys(options).map((optionsKey) => {
                var value = options[optionsKey];
                merge.push(value);
            });
            fs.writeFileSync(`${name}.sublime-theme`, JSON.stringify(merge, null, 4), (err) => {
                if (err) console.log(err);
            });
        });
    });
}

export default function themes() {
    __theme("Meetio", "default");
    __theme("Meetio-Darker", "default");
    __theme("Meetio-Lighter", "default");
    __theme("Meetio-Palenight", "default");
}
