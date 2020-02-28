// @ts-ignore
import * as path from 'path';
import * as fs from 'fs';
import * as variables from './../src/themes/variables';

function build(name: string) {
    const merge: string[] = [];
    let rules: any = {};
    fs.readdirSync("./src/themes/files/").forEach((file: string) => {
        file = path.join(__dirname, "/../src/themes/files/" + file);
        fs.readFile(file, "utf8", (err, data) => {
            if (err) {
                throw err;
            }
            rules = JSON.parse(data);
            Object.keys(rules).map((rulesKey: string) => {
                const value = rules[rulesKey];
                merge.push(value);
            });
            const options = { variables: variables, rules: merge };
            fs.writeFileSync(
                `${name}.hidden-theme`,
                JSON.stringify(options, null, 4)
            );
            const theme = {
                extends: "Meetio-Theme.hidden-theme",
                variables: variables,
                rules: []
            };
            fs.writeFileSync(
                `${name}.sublime-theme`,
                JSON.stringify(theme, null, 4)
            );
        });
    });
}

build("Meetio-Theme");
