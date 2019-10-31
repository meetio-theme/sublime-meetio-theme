const css = require("./css-syntax")
const diff = require("./diff-syntax")
const global = require("./global-syntax")
const git = require("./git-gutter")
const html = require("./html-syntax")
const ini = require("./ini-syntax")
const javascript = require("./javascript-syntax")
const json = require("./json-syntax")
const markdown = require("./markdown-syntax")
const php = require("./php-syntax")
const python = require("./python-syntax")
const sql = require("./sql-syntax")
const sublimelinter = require("./sublimelinter")
const typescript = require("./typescript-syntax")
const vue = require("./vue-syntax")

module.exports = [
    css,
    diff,
    global,
    git,
    html,
    ini,
    javascript,
    json,
    markdown,
    php,
    python,
    sql,
    sublimelinter,
    typescript,
    vue
]
