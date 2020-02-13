/*eslint-disable no-undef */
const common = require("./rules/common");
const markdown = require("./rules/markdown");
const css = require("./rules/css");
const html = require("./rules/html");
const json = require("./rules/json");
const javascript = require("./rules/javascript");
const typescript = require("./rules/typescript");
const vue = require("./rules/vue");
const php = require("./rules/php");
const sql = require("./rules/sql");
const python = require("./rules/python");
const ini = require("./rules/ini");
const git = require("./rules/git-gutter");
const sublimelinter = require("./rules/sublimelinter");
const diff = require("./rules/diff");

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
];
