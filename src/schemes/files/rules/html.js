module.exports = [
    {
        name: "[HTML] String",
        scope: ["text.html.basic string"],
        settings: {
            foreground: "var(green)",
        },
    },
    {
        name: "[HTML] Operator",
        scope: ["keyword.other.substitution"],
        settings: {
            foreground: "var(green)",
        },
    },
    {
        name: "[HTML] Attributes",
        scope: [
            "entity.other.attribute-name.html",
            "entity.other.attribute-name",
        ],
        settings: {
            foreground: "var(yellow)",
        },
    },
    {
        name: "[HTML] Tag Name",
        scope: ["entity.name.tag"],
        settings: {
            foreground: "var(red)",
        },
    },
    {
        name: "[HTML] Tag Attribute",
        scope: ["text.html.basic entity.other.attribute-name"],
        settings: {
            foreground: "var(purple)",
        },
    },
]
