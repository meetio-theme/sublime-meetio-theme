import * as path from 'path';
import * as fs from 'fs';
import svg2img from 'svg2img';
import iconTypeSettings from './iconTypeSettings';

export interface ISettings {
    size: number;
    suffix: string | boolean;
}

export default function buildIconsType() {
    const svgSrc = path.join(__dirname, `/iconType/`);
    fs.readdirSync(svgSrc).forEach((icon: string) => {
        const iconPath = path.join(__dirname, `/iconType/${icon}`);
        icon = icon
            .split('.')
            .slice(0, -1)
            .join('.');
        fs.readFile(iconPath, 'utf8', (err, data: any) => {
            if (err) throw err;
            data = Buffer.from(data, 'utf8');
            Object.values(iconTypeSettings).forEach((setting: ISettings) => {
                svg2img(
                    data,
                    { width: setting.size, height: setting.size },
                    (_: any, buffer: Buffer) => {
                        fs.mkdir('icons', () => {
                            fs.writeFileSync(
                                `icons/${
                                    setting.suffix
                                        ? icon + setting.suffix
                                        : icon
                                }.png`,
                                buffer
                            );
                        });
                    }
                );
            });
        });
    });
}
