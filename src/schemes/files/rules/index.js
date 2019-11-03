const common = require("./common")
const markdown = require("./markdown")
const css = require("./css")
const html = require("./html")
const json = require("./json")
const javascript = require("./javascript")
const typescript = require("./typescript")
const vue = require("./vue")
const php = require("./php")
const sql = require("./sql")
const python = require("./python")
const ini = require("./ini")
const git = require("./git-gutter")
const sublimelinter = require("./sublimelinter")
const diff = require("./diff")

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
