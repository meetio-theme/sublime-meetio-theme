const path = require('path');
const fs = require('fs');
const gulp = require('gulp');
const array = [];
let object = {};

gulp.task('build', () => {
    fs.readdirSync('./templates').forEach(file => {
        file = path.join(__dirname, '/templates/' + file);
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) throw err;
            object = JSON.parse(data);
            Object.keys(object).map((objectKey) => {
                var value = object[objectKey];
                array.push(value);
            });
            const json = JSON.stringify(array, null, 4);
            fs.writeFile("Material-Lite.sublime-theme", json, (err) => {
                if (err) console.log(err);
                console.log("The file was saved!");
            });
        });
    });
});
