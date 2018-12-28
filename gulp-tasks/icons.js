/*eslint-disable semi*/
import path from "path";
import fs from "fs";
import svg2png from "svg2png";
import allIcons from "./../src/icons/icons.json";
import options from "./../src/icons/options.json";

const debug = true;

function __icons(variation) {
    let iconPath;
    allIcons.forEach(icon => {
        if (debug) console.log(`👁  - Reading ${icon} icon.`);
        iconPath = path.join(__dirname, `/../src/icons/svg/${icon}.svg`);
        fs.readFile(iconPath, (err, data) => {
            if (err) throw err;
            options.settings.forEach(setting => {
                svg2png(data, { width: setting.size, height: setting.size })
                    .then(buffer => {
                        fs.writeFileSync(`assets/${variation}/${setting.suffix ? icon + setting.suffix : icon}.png`, buffer, (err) => {
                            if (err) {
                                console.log(`🆘 - Problme with ${icon}.`);
                                console.log(err);
                            }
                        });
                        console.log(`✅ - Icon: ${setting.suffix ? icon + setting.suffix : icon} was saved!`);
                    })
                    .catch(e => console.error(e));
            });
        });
    });
}

export default function icons() {
    __icons("light");
}
