/*eslint-disable no-undef */
module.exports = [
    {
        name: "[INI] - Color for Entity",
        scope: ["source.ini entity", "meta.embedded.block.ini", "source.ini"],
        settings: {
            foreground: "var(red)",
        },
    },
    {
        name: "[INI] - Color for Keyword",
        scope: ["source.ini keyword", "keyword.other.definition.ini"],
        settings: {
            foreground: "var(purple)",
        },
    },
    {
        name: "[INI] - Color for Value",
        scope: [
            "source.ini meta.declaration.ini meta.value.ini string.name.value.ini",
        ],
        settings: {
            foreground: "var(green)",
        },
    },
];
