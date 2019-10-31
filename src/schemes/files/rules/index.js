const common = require("./common-syntax")
const markdown = require("./markdown-syntax")
const css = require("./css-syntax")
const html = require("./html-syntax")
const json = require("./json-syntax")
const javascript = require("./javascript-syntax")
const typescript = require("./typescript-syntax")
const vue = require("./vue-syntax")
const php = require("./php-syntax")
const sql = require("./sql-syntax")
const python = require("./python-syntax")
const ini = require("./ini-syntax")
const git = require("./git-gutter")
const sublimelinter = require("./sublimelinter")
const diff = require("./diff-syntax")

module.exports = [
    common,
    markdown,
    css,
    html,
    json,
    javascript,
    typescript,
    vue,
    php,
    sql,
    python,
    ini,
    git,
    sublimelinter,
    diff,
]
