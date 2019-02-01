import path from 'path';
import fs from 'fs';
import variables from './../src/themes/variables.json';

function build(name, folder) {
  const merge = [];
  let rules = {};
  fs.readdirSync(`./src/themes/${folder}/`).forEach(file => {
    file = path.join(__dirname, `/../src/themes/${folder}/` + file);
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
      rules = JSON.parse(data);
      Object.keys(rules).map(rulesKey => {
        const value = rules[rulesKey];
        merge.push(value);
      });
      const options = {variables: variables, rules: merge};
      fs.writeFileSync(`${name}.json`, JSON.stringify(options, null, 4), e => {
        if (e) {
          console.log(e);
        }
      });
      const theme = {extends: 'Meetio.json', variables: variables};
      fs.writeFileSync(
        `${name}.sublime-theme`,
        JSON.stringify(theme, null, 4),
        e => {
          if (e) {
            console.log(e);
          }
        }
      );
    });
  });
}

export default function themes() {
  build('Meetio', 'default');
}
