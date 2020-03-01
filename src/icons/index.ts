/*eslint-disable no-undef */
const path = require('path');
const fs = require('fs');
const svg2img = require('svg2img');
const iconTypeSettings = require('./iconTypeSettings');

export interface ISettings {
    size: number;
    suffix: string | boolean;
}

export default function buildIconsType(settings = { dist: 'icons' }) {
    const { dist } = settings;
    const typeSettings: ISettings = iconTypeSettings;

    const svgSrc = path.join(__dirname, `/iconType/`);
    fs.readdirSync(svgSrc).forEach((icon: string) => {
        const iconPath = path.join(__dirname, `/iconType/${icon}`);
        icon = icon
            .split('.')
            .slice(0, -1)
            .join('.');
        fs.readFile(iconPath, 'utf8', (err, data) => {
            if (err) throw err;
            data = Buffer.from(data, 'utf8');
            Object.values(typeSettings).forEach((setting: ISettings) => {
                svg2img(
                    data,
                    { width: setting.size, height: setting.size },
                    (_: any, buffer: Buffer) => {
                        fs.mkdir(`${dist}`, () => {
                            fs.writeFileSync(
                                `${dist}/${
                                    setting.suffix
                                        ? icon + setting.suffix
                                        : icon
                                }.png`,
                                buffer,
                                (err: Error) => {
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
}
