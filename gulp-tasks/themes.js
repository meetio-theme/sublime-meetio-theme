/*eslint-disable semi*/
import path from "path";
import fs from "fs";
import properties from "./../src/themes/properties.json";

function __theme(name, folder) {
    const merge = [];
    let rules = {};
    fs.readdirSync(`./src/themes/${folder}/`).forEach(file => {
        file = path.join(__dirname, `/../src/themes/${folder}/` + file);
        fs.readFile(file, "utf8", (err, data) => {
            if (err) throw err;
            rules = JSON.parse(data);
            Object.keys(rules).map((rulesKey) => {
                var value = rules[rulesKey];
                merge.push(value);
            });
            const theme = {
                "variables": properties,
                "rules": merge
            };
            fs.writeFileSync(`${name}.sublime-theme`, JSON.stringify(theme, null, 4), (err) => {
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
