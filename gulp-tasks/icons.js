/*eslint-disable semi*/
import path from "path";
import fs from "fs";
import svg2png from "svg2png";
import lightIcons from "./../src/icons/light.json";

const debug = true;

function __icons(variation) {
    let iconPath;
    Object.keys(lightIcons).forEach(icon => {
        if (debug) console.log(`👁  - Reading ${icon} icon.`);
        iconPath = path.join(__dirname, `/../src/icons/svg/${icon}.svg`);
        fs.readFile(iconPath, (err, data) => {
            if (err) throw err;
            lightIcons[icon].settings.forEach(setting => {
                svg2png(data, { width: setting.size, height: setting.size })
                    .then(buffer => {
                        fs.writeFileSync(`assets/${variation}/${setting.suffix ? icon + setting.suffix : icon}.png`, buffer, (err) => {
                            if (err) {
                                console.log(`🆘 - Problme with ${icon}.`);
                                console.log(err);
                            }
                        });
                    })
                    .catch(e => console.error(e));
            });
            console.log(`✅ - Icon: ${icon} was saved!`);
        });
    });
}

export default function icons() {
    __icons("light");
}
