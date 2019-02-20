import path from 'path';
import fs from 'fs';
import globals from './../src/schemes/files/globals.json';
import rules from './../src/schemes/files/rules.json';

function build() {
  let filePath;
  fs.readdirSync('./src/schemes/').forEach(file => {
    if (file === 'files') {
      return;
    }
    filePath = path.join(__dirname, '/../src/schemes/' + file);
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      const options = {
        globals,
        rules,
      };

      data = JSON.parse(data);
      const scheme = Object.assign(data, options);

      fs.writeFileSync(
        `schemes/${data.name}.sublime-color-scheme`,
        JSON.stringify(scheme, null, 4),
        err => {
          if (err) {
            console.log(err);
          }
        }
      );
    });
  });
}

export default function schemes() {
  build();
}
