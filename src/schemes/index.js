"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var ini_1 = require("./rules/ini");
var sublimelinter_1 = require("./rules/sublimelinter");
var vue_1 = require("./rules/vue");
exports["default"] = __spreadArrays(ini_1["default"], sublimelinter_1["default"], vue_1["default"]);
