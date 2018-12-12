const path = require('path');
const fs = require('fs');
const gulp = require('gulp');
const array = [];
let object = {};

gulp.task('merge', () => {
    fs.readdirSync('./modules').forEach(file => {
        file = path.join(__dirname, '/modules/' + file);
        fs.readFile(file, 'utf8', function (err, data) {
            if (err) throw err;
            object = JSON.parse(data);
            Object.keys(object).map(function(objectKey, index) {
                var value = object[objectKey];
                array.push(value);
            });
            const json = JSON.stringify(array, null, 4);
            fs.writeFile("Material.sublime-theme", json, function(err) {
                if (err) console.log(err);
                console.log("The file was saved!");
            });
        });
    })
});
