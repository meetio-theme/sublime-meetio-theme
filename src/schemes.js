"use strict";
exports.__esModule = true;
var scheme_generator_1 = require("@meetio/scheme-generator");
var pallete = require("@meetio/meetio-colors");
var index_1 = require("./schemes/index");
[
    {
        name: 'Meetio-Theme-Dark-2',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: pallete.dark
    },
    {
        name: 'Meetio-Theme-Light-2',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: pallete.light
    },
].map(function (item) {
    var settings = {
        colors: item.variables,
        rules: index_1["default"]
    };
    scheme_generator_1.generateScheme(item.name, item.author, item.name, settings, 'schemes');
});
