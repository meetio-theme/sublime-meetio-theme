"use strict";
exports.__esModule = true;
var scheme_generator_1 = require("@meetio/scheme-generator");
var pallete = require("@meetio/meetio-colors/theme/index");
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
    console.log(item.name);
    scheme_generator_1.generateScheme(item.name, item.author, item.name, settings, 'schemes');
});
