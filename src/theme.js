/*eslint-disable no-undef */
const path = require("path");
const fs = require("fs");
const variables = require("./../src/themes/variables.json");

function build(name) {
    const merge = [];
    let rules = {};
    fs.readdirSync("./src/themes/files/").forEach(file => {
        file = path.join(__dirname, "/../src/themes/files/" + file);
        fs.readFile(file, "utf8", (err, data) => {
            if (err) {
                throw err;
            }
            rules = JSON.parse(data);
            Object.keys(rules).map(rulesKey => {
                const value = rules[rulesKey];
                merge.push(value);
            });
            const options = { variables: variables, rules: merge };
            fs.writeFileSync(
                `${name}.hidden-theme`,
                JSON.stringify(options, null, 4),
                e => {
                    if (e) {
                        console.log(e);
                    }
                }
            );
            const theme = {
                extends: "Meetio-Theme.hidden-theme",
                variables: variables,
                rules: []
            };
            fs.writeFileSync(
                `${name}.sublime-theme`,
                JSON.stringify(theme, null, 4),
                e => {
                    if (e) {
                        console.log(e);
                    }
                }
            );
        });
    });
}

build("Meetio-Theme");
