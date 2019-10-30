/*eslint-disable no-undef */
const path = require("path")
const fs = require("fs")
const rimraf = require("rimraf")

const schemes = require("./schemes/index")
const globals = require("./schemes/files/globals")
const rules = require("./schemes/files/rules/index")


schemes.forEach(scheme => {
    const data = []
    const allRules = []
    const allScopes = new Set()

    rules.forEach((rule, index) => {
        rule.forEach(item => {

            if (allScopes.has(item.scope.toString())) {
                console.log(`duplicated scope: ${item.scope.toString()}`)
            }
            allScopes.add(item.scope.toString());

            allRules.push({
                name: item.name,
                scope: item.scope.toString(),
                foreground: item.foreground,
            })
        })
    })

    data.push({
        name: scheme.name,
        author: scheme.author,
        variables: scheme.variables,
        globals: globals,
        rules: allRules
    });

    rimraf("schemes", () => {
        fs.mkdir("schemes", () => {
            fs.writeFileSync(
                `schemes/${scheme.name}.sublime-color-scheme`,
                JSON.stringify(data[0], null, 4),
                err => {
                    if (err) {
                        console.log(err)
                    }
                }
            )
        })
    })
})
