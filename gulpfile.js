const path = require('path');
const fs = require('fs');
const gulp = require('gulp');
const array = [];
let object = {};

const build = function() {
    console.log("Start Build Matilde Theme");

    fs.readdirSync('./src/themes/').forEach(file => {
        file = path.join(__dirname, '/src/themes/' + file);
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) throw err;
            object = JSON.parse(data);
            Object.keys(object).map((objectKey) => {
                var value = object[objectKey];
                array.push(value);
            });
            fs.writeFile("Matilde-Theme.sublime-theme", JSON.stringify(array, null, 4), (err) => {
                if (err) {
                    console.log(err);
                }
                console.log("The file was saved!");
            });
        });
    });
};

gulp.task("default", build);

