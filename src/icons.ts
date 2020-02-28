// @ts-ignore
import * as path from 'path';
import * as fs from 'fs';
import svg2img from 'svg2img';
import * as defaultOptions from './icons/default';
import * as fileIcons from './icons/index';

fs.readdirSync('./src/icons/common/').forEach((icon: string) => {
    const iconPath = path.join(__dirname, `/../src/icons/common/${icon}`);
    icon = icon
        .split('.')
        .slice(0, -1)
        .join('.');
    fs.readFile(iconPath, 'utf8', (err: any, data: any) => {
        if (err) throw err;
        data = Buffer.from(data, 'utf8');
        defaultOptions.settings.forEach((setting: any) => {
            svg2img(
                data,
                { width: setting.size, height: setting.size },
                (_: any, buffer: Buffer) => {
                    fs.writeFileSync(
                        `textures/${
                            setting.suffix ? icon + setting.suffix : icon
                        }.png`,
                        buffer
                    );
                }
            );
        });
    });
});

fileIcons.run();
