/* eslint-disable no-undef */
import * as path from 'path';
import * as fs from 'fs';
import { Resvg } from '@resvg/resvg-js';
import { icons, IOptions } from './icons/index';

import { log } from './utils/log';

export interface ISettings {
    size: number;
    suffix: string | boolean;
    fill?: string;
}

icons.forEach((files: IOptions) => {
    files.icons.forEach((icon) => {
        const srcFolder = path.join(
            __dirname,
            `icons/${files.folder}/${icon.name}.svg`
        );
        const distFolder = path.join(__dirname, `../textures/${files.folder}`);
        fs.readFile(srcFolder, 'utf8', (err: any, data: any) => {
            if (err) throw err;
            // eslint-disable-next-line no-undef
            data = Buffer.from(data, 'utf8');
            icon.settings.forEach((setting) => {
                const { width, suffix } = setting;
                fs.mkdir(distFolder, function () {
                    const resvg = new Resvg(data, {
                        fitTo: { mode: 'width', value: width },
                    });
                    const pngData = resvg.render();
                    const pngBuffer = pngData.asPng();

                    fs.writeFileSync(
                        `${distFolder}/${
                            suffix ? icon.name + suffix : icon.name
                        }.png`,
                        pngBuffer
                    );
                    log.success(icon.name, distFolder);
                });
            });
        });
    });
});
