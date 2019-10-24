/*eslint-disable no-undef */
const path = require("path")
const fs = require("fs")
const rimraf = require("rimraf")
const globals = require("./files/globals.json")

function build() {
    const rules = []
    let syntax, filePath
    fs.readdirSync("./files/rules/").forEach(file => {
        filePath = path.join(__dirname, "/files/rules/" + file)
        fs.readFile(filePath, "utf8", (err, data) => {
            if (err) {
                throw err
            }

            syntax = JSON.parse(data)
            Object.keys(syntax).map(syntaxKey => {
                const value = syntax[syntaxKey]
                rules.push(value)
            })
        })
    })

    fs.readdirSync("./schemes/").forEach(file => {
        filePath = path.join(__dirname, "/schemes/" + file)
        if (fs.lstatSync(filePath).isFile()) {
            fs.readFile(filePath, "utf8", (err, data) => {
                if (err) {
                    throw err
                }

                const allRules = {
                    globals,
                    rules,
                }

                data = JSON.parse(data)
                const scheme = Object.assign(data, allRules)

                rimraf("schemes", () => {
                    fs.mkdir("schemes", () => {
                        fs.writeFileSync(
                            `schemes/${data.name}.sublime-color-scheme`,
                            JSON.stringify(scheme, null, 4),
                            err => {
                                if (err) {
                                    console.log(err)
                                }
                            }
                        )
                    })
                })
            })
        }
    })
}

build()
