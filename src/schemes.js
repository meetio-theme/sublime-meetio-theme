/*eslint-disable no-undef */
const fs = require("fs")
const rimraf = require("rimraf")

const schemes = require("./schemes/index")
const globals = require("./schemes/files/globals")
const rules = require("./schemes/files/rules/index")

schemes.forEach(scheme => {
    const allRules = []
    const allScopes = new Set()

    rules.forEach(rule => {
        rule.forEach(item => {
            item.scope.forEach(i => {
                if (allScopes.has(i)) {
                    console.log(`duplicated scope: ${i} in ${item.name}`)
                }
                allScopes.add(i)
            })

            allRules.push({
                name: item.name,
                scope: item.scope.toString(),
            })

            Object.assign(allRules[allRules.length - 1], item.settings)
        })
    })

    const data = {
        name: scheme.name,
        author: scheme.author,
        variables: scheme.variables,
        globals: globals,
        rules: allRules,
    }

    rimraf("schemes", () => {
        fs.mkdir("schemes", () => {
            fs.writeFileSync(
                `schemes/${scheme.name}.sublime-color-scheme`,
                JSON.stringify(data, null, 4),
                err => {
                    if (err) throw err
                }
            )
        })
    })
})
