module.exports = [
    {
        name: "[JSON] Key ",
        scope: ["meta.mapping.key.json string.quoted.double.json"],
        foreground: "var(red)",
    },
    {
        name: "[JSON] Value",
        scope: ["meta.mapping.value.json string.quoted.double.json"],
        foreground: "var(green)",
    },
    {
        name: "[JSON] Constant",
        scope: ["constant.language.json"],
        foreground: "var(purple)",
    },
    {
        name: "[JSON] Character Escape",
        scope: ["constant.character.escape.json"],
        foreground: "var(yellow)",
    },
    {
        name: "[JSON] Constant Numeric",
        scope: ["constant.numeric.json"],
        foreground: "var(purple)",
    },
    {
        name: "[JSON] Mapping Level 1",
        scope: [
            "source.json meta.mapping.value.json meta.mapping.key.json string.quoted.double.json",
        ],
        foreground: "var(yellow)",
    },
    {
        name: "[JSON] Mapping Level 2",
        scope: [
            "source.json meta.mapping.value.json meta.mapping.value.json meta.mapping.key.json string.quoted.double.json",
        ],
        foreground: "var(brown)",
    },
]
