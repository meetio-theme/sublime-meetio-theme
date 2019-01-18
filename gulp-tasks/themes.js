/*eslint-disable semi*/
import path from "path";
import fs from "fs";
import variables from "./../src/themes/variables.json";

function build(name, folder) {
    const merge = [];
    let rules = {};
    fs.readdirSync(`./src/themes/${folder}/`).forEach(file => {
        file = path.join(__dirname, `/../src/themes/${folder}/` + file);
        fs.readFile(file, "utf8", (err, data) => {
            if (err) throw err;
            rules = JSON.parse(data);
            Object.keys(rules).map((rulesKey) => {
                const value = rules[rulesKey];
                merge.push(value);
            });
            const theme = {
                "variables": variables,
                "rules": merge
            };
            fs.writeFileSync(`${name}.json`, JSON.stringify(theme, null, 4), (err) => {
                if (err) console.log(err);
            });
        });
    });
}

export default function themes() {
    build("Meetio", "default");
}
