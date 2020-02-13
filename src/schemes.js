"use strict";
exports.__esModule = true;
var scheme_generator_1 = require("@meetio/scheme-generator");
var pallete = require("@meetio/meetio-colors");
[
    {
        name: 'Meetio-Theme-Dark',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: pallete.dark
    },
    {
        name: 'Meetio-Theme-Light',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: pallete.light
    },
].map(function (item) {
    var settings = {
        colors: item.variables,
        rules: []
    };
    scheme_generator_1.generateScheme(item.name, item.author, item.name, settings, 'schemes');
});
