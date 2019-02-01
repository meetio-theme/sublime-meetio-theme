import path from 'path';
import fs from 'fs';
import svg2png from 'svg2png';
import defaultOptions from './../src/icons/default.json';

function build(folder) {
  let iconPath;
  fs.readdirSync('./src/icons/svg').forEach(icon => {
    iconPath = path.join(__dirname, `/../src/icons/svg/${icon}`);
    icon = icon
      .split('.')
      .slice(0, -1)
      .join('.');
    fs.readFile(iconPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
      data = data.replace('#000', defaultOptions.color);
      data = Buffer.from(data, 'utf8');
      defaultOptions.settings.forEach(setting => {
        svg2png(data, {width: setting.size, height: setting.size})
          .then(buffer => {
            fs.writeFileSync(
              `assets/${folder}/${
                setting.suffix ? icon + setting.suffix : icon
              }.png`,
              buffer,
              err => {
                if (err) {
                  console.log(err);
                }
              }
            );
          })
          .catch(e => console.error(e));
      });
    });
  });
}

export default function icons() {
  build('default');
}
