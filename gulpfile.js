/*eslint-disable semi*/
const path = require("path"),
    fs = require("fs"),
    gulp = require("gulp");

function theme(name, tone) {
    const merge = [];
    let options = {};
    console.log("===============================================================================");
    console.log("▶️  - Start Theme Build.");
    console.log("===============================================================================");

    fs.readdirSync(`./src/themes/${tone}/`).forEach(file => {
        console.log(`👁  - Reading ${file} file.`);
        file = path.join(__dirname, `/src/themes/${tone}/` + file);
        fs.readFile(file, "utf8", (err, data) => {
            if (err) throw err;
            options = JSON.parse(data);
            Object.keys(options).map((optionsKey) => {
                var value = options[optionsKey];
                merge.push(value);
            });
            fs.writeFileSync(`${name}.sublime-theme`, JSON.stringify(merge, null, 4), (err) => {
                if (err) {
                    console.log("===============================================================================");
                    console.log(`🆘 - Problme with ${name}.`);
                    console.log(err);
                    console.log("===============================================================================");
                }
            });
        });
    });
    console.log("===============================================================================");
    console.log(`✅ - Theme: ${name} was saved!`);
    console.log("===============================================================================");
}

function scheme() {
    console.log("===============================================================================");
    console.log("▶️  - Start Scheme Build.");
    console.log("===============================================================================");
    let filePath;
    fs.readdirSync("./src/scheme/").forEach(file => {
        console.log(`👁  - Reading ${file} file.`);
        filePath = path.join(__dirname, "/src/scheme/" + file);
        fs.readFile(filePath, "utf8", (err, data) => {
            if (err) throw err;
            fs.writeFile(`${file}.sublime-color-scheme`, data, (err) => {
                if (err) {
                    console.log("===============================================================================");
                    console.log(`🆘 - Problme with ${file}.`);
                    console.log(err);
                    console.log("===============================================================================");
                }
            });
            console.log("===============================================================================");
            console.log(`✅ - Scheme: ${file} was saved!`);
            console.log("===============================================================================");
        });
    });
}

const build = () => {
    scheme();
    theme("Mariana-Theme-Light", "light");
};

gulp.task("default", build);

