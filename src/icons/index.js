/*eslint-disable no-undef */
const path = require("path");
const fs = require("fs");
const svg2img = require("svg2img");
const iconTypeSettings = require("./iconTypeSettings");

module.exports.run = function(settings = { dist: "icons" }) {
    const { dist } = settings;
    const sizes = iconTypeSettings;

    const svgSrc = path.join(__dirname, `/iconType/`);
    fs.readdirSync(svgSrc).forEach(icon => {
        const iconPath = path.join(__dirname, `/iconType/${icon}`);
        icon = icon
            .split(".")
            .slice(0, -1)
            .join(".");
        fs.readFile(iconPath, "utf8", (err, data) => {
            if (err) throw err;
            data = Buffer.from(data, "utf8");
            Object.values(sizes).forEach(setting => {
                svg2img(
                    data,
                    { width: setting.size, height: setting.size },
                    (error, buffer) => {
                        fs.mkdir(`${dist}`, () => {
                            fs.writeFileSync(
                                `${dist}/${
                                    setting.suffix
                                        ? icon + setting.suffix
                                        : icon
                                }.png`,
                                buffer,
                                err => {
                                    if (err) {
                                        console.log(err);
                                    }
                                }
                            );
                        });
                    }
                );
            });
        });
    });
};
