/*eslint-disable no-undef */
const path = require("path")
const fs = require("fs")
const svg2img = require("svg2img")
const defaultOptions = require("./icons/default.js")

function build() {
    let iconPath
    fs.readdirSync("./src/icons/svg/").forEach(icon => {
        iconPath = path.join(__dirname, `/../src/icons/svg/${icon}`)
        icon = icon
            .split(".")
            .slice(0, -1)
            .join(".")
        fs.readFile(iconPath, "utf8", (err, data) => {
            if (err) throw err
            data = Buffer.from(data, "utf8")
            defaultOptions.settings.forEach(setting => {
                svg2img(
                    data,
                    { width: setting.size, height: setting.size },
                    function(error, buffer) {
                        fs.writeFileSync(
                            `assets/${
                                setting.suffix ? icon + setting.suffix : icon
                            }.png`,
                            buffer,
                            err => {
                                if (err) {
                                    console.log(err)
                                }
                            }
                        )
                    }
                )
            })
        })
    })
}

build()
