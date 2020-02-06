/*eslint-disable no-undef */
module.exports = [
    {
        name: "Comment",
        scope: ["comment, punctuation.definition.comment"],
        settings: {
            foreground: "var(comments)",
            font_style: "italic",
        },
    },
    {
        name: "Class",
        scope: [
            "meta.export.default meta.class storage.type.class",
            "meta.class storage.type.class",
            "meta.interface storage.type.interface",
        ],
        settings: {
            foreground: "var(purple)",
        },
    },
    {
        name: "Entity Name",
        scope: [
            "meta.export meta.class entity.name.class",
            "meta.class entity.name.class",
            "meta.class entity.name.type.class",
        ],
        settings: {
            foreground: "var(yellow)",
        },
    },
    {
        name: "Interface Name",
        scope: ["meta.interface entity.name.type.interface"],
        settings: {
            foreground: "var(yellow)",
        },
    },
    {
        name: "Function Call",
        scope: [
            "meta.function-call.constructor variable.type",
            "meta.export meta.object-literal meta.function meta.block meta.function-call.constructor variable.type",
            "meta.export meta.object-literal meta.object-literal meta.function meta.block meta.function-call.constructor variable.type",
            "meta.catch meta.block meta.function-call.constructor variable.type",
            "meta.function-call meta.group meta.function meta.block meta.function meta.block meta.function-call.constructor variable.type",
            "meta.try meta.block meta.function-call.constructor variable.type",
            "meta.class meta.block meta.function meta.block meta.function-call.constructor variable.type",
        ],
        settings: {
            foreground: "var(yellow)",
        },
    },
    {
        name: "Declaration",
        scope: [
            "meta.interface storage.modifier",
            "meta.export.default meta.class meta.method.declaration storage.modifier",
            "meta.class storage.modifier",
        ],
        settings: {
            foreground: "var(purple)",
        },
    },
    {
        name: "Inherited",
        scope: [
            "meta.interface entity.other.inherited-class",
            "meta.class meta.path entity.other.inherited-class",
            "meta.class entity.other.inherited-class",
        ],
        settings: {
            foreground: "var(orange)",
        },
    },
    {
        name: "Number, Constant, Function Argument, Tag Attribute, Embedded",
        scope: [
            "constant.numeric",
            "constant.language",
            "support.constant",
            "constant.character",
            "constant.escape",
            "keyword.other.unit",
            "keyword.other",
        ],
        settings: {
            foreground: "var(pink)",
        },
    },
    {
        name: "Variable",
        scope: ["variable.member"],
        settings: {
            foreground: "var(red)",
        },
    },
    {
        name: "Operator, Misc",
        scope: [
            "keyword.control",
            "constant.other.color",
            "punctuation.definition.tag",
            "punctuation",
            "punctuation.separator.inheritance.php",
            "punctuation.definition.tag.html",
            "punctuation.definition.tag.begin.html",
            "punctuation.definition.tag.end.html",
            "punctuation.section.embedded",
            "keyword.other.template",
        ],
        settings: {
            foreground: "var(cyan)",
        },
    },
    {
        name: "Storage",
        scope: ["storage, storage.type"],
        settings: {
            foreground: "var(purple)",
        },
    },
    {
        name: "String",
        scope: ["string"],
        settings: {
            foreground: "var(green)",
        },
    },
    {
        name: "Invalid",
        scope: ["invalid", "invalid.illegal"],
        settings: {
            foreground: "var(invalid)",
        },
    },
];
