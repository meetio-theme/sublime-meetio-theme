/*eslint-disable no-undef */
module.exports = [
    {
        name: "[SQL] Source",
        scope: ["source.sql"],
        settings: {
            foreground: "var(foreground)",
        },
    },
    {
        name: "[SQL] Other keywords",
        scope: ["keyword.other.DML.sql"],
        settings: {
            foreground: "var(blue)",
        },
    },
    {
        name: "[SQL] Function",
        scope: ["support.function.aggregate.sql"],
        settings: {
            foreground: "var(pink)",
        },
    },
];
