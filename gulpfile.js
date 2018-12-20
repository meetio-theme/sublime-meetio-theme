const path = require('path');
const fs = require('fs');
const gulp = require('gulp');

function theme(name) {
    const merge = [];
    let options = {};
    console.log('===============================================================================');
    console.log("▶️  - Start Theme Build.");
    console.log('===============================================================================');

    fs.readdirSync('./src/themes/').forEach(file => {
        console.log(`👁  - Reading ${file} file.`);
        file = path.join(__dirname, '/src/themes/' + file);
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) throw err;
            options = JSON.parse(data);
            Object.keys(options).map((optionsKey) => {
                var value = options[optionsKey];
                merge.push(value);
            });
            fs.writeFileSync(`${name}.sublime-theme`, JSON.stringify(merge, null, 4), (err) => {
                if (err) {
                    console.log('===============================================================================');
                    console.log(`🆘 - Problme with ${name}.`);
                    console.log(err);
                    console.log('===============================================================================');
                }
            });
        });
    });
    console.log('===============================================================================');
    console.log(`✅ - Theme: ${name} was saved!`);
    console.log('===============================================================================');
}

function scheme(name) {
    console.log('===============================================================================');
    console.log("▶️  - Start Scheme Build.");
    console.log('===============================================================================');

    fs.readdirSync('./src/scheme/').forEach(file => {
        console.log(`👁  - Reading ${file} file.`);
        file = path.join(__dirname, '/src/scheme/' + file);
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) throw err;
            fs.writeFile(`${name}.sublime-color-scheme`, data, (err) => {
                if (err) {
                    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
                    console.log(`🆘 - Problme with ${name}.`);
                    console.log(err);
                    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
                }
            });
        });
    });
    console.log('===============================================================================');
    console.log(`✅ - Scheme: ${name} was saved!`);
    console.log('===============================================================================');
}

const build = () => {
    scheme('Mariana-Theme');
    theme('Mariana-Theme');
};

gulp.task("default", build);

