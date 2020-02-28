/*eslint-disable no-undef */
const path = require("path");
const fs = require("fs");
const svg2img = require("svg2img");
const defaultOptions = require("./icons/default.js");
const fileIcons = require("./icons/index");

fs.readdirSync("./src/icons/common/").forEach(icon => {
    const iconPath = path.join(__dirname, `/../src/icons/common/${icon}`);
    console.log(iconPath);
    icon = icon
        .split(".")
        .slice(0, -1)
        .join(".");
    fs.readFile(iconPath, "utf8", (err, data) => {
        if (err) throw err;
        data = Buffer.from(data, "utf8");
        defaultOptions.settings.forEach(setting => {
            svg2img(
                data,
                { width: setting.size, height: setting.size },
                function(error, buffer) {
                    fs.writeFileSync(
                        `assets/${
                            setting.suffix ? icon + setting.suffix : icon
                        }.png`,
                        buffer,
                        err => {
                            if (err) {
                                console.log(err);
                            }
                        }
                    );
                }
            );
        });
    });
});

fileIcons.run();
