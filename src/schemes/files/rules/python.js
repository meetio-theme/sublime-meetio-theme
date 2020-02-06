/*eslint-disable no-undef */
module.exports = [
    {
        name: "[Python] Variables",
        scope: [
            "source.python meta.function.parameters.python variable.parameter.python",
            "source.python meta.function-call.arguments.python variable.parameter.python",
        ],
        settings: {
            foreground: "var(orange)",
        },
    },
    {
        name: "[Python] Function Arguments",
        scope: [
            "source.python meta.function-call.arguments.python meta.qualified-name.python meta.generic-name.python",
        ],
        settings: {
            foreground: "var(foreground)",
        },
    },
    {
        name: "[Python] Statement While",
        scope: [
            "source.python meta.statement.while.python constant.language.python",
            "source.python constant.language.python",
        ],
        settings: {
            foreground: "var(pink)",
        },
    },
    {
        name: "[Python] Annotation",
        scope: [
            "source.python meta.function.parameters.annotation.python meta.qualified-name.python support.type.python",
        ],
        settings: {
            foreground: "var(yellow)",
        },
    },
    {
        name: "[Python] Print",
        scope: [
            "source.python keyword.other.print.python",
            "source.python meta.function-call.python meta.qualified-name.python variable.function.python support.function.builtin.python",
        ],
        settings: {
            font_style: "normal",
            foreground: "var(pink)",
        },
    },
    {
        name: "[Python] Function Parameters",
        scope: [
            "source.python meta.item-access.arguments.python meta.qualified-name.python meta.generic-name.python",
            "source.python meta.item-access.arguments.python meta.qualified-name.python support.type.python",
            "source.python meta.function.parameters.annotation.python meta.item-access.arguments.python meta.qualified-name.python support.type.python",
        ],
        settings: {
            foreground: "var(green)",
        },
    },
    {
        name: "[Python] Generic Name",
        scope: [
            "source.python meta.function.parameters.annotation.python meta.item-access.arguments.python meta.item-access.python meta.qualified-name.python meta.generic-name.python",
        ],
        settings: {
            foreground: "var(blue)",
        },
    },
    {
        name: "[Python] Exception",
        scope: [
            "source.python meta.statement.raise.python meta.function-call.python meta.qualified-name.python variable.function.python support.type.exception.python",
        ],
        settings: {
            foreground: "var(red)",
        },
    },
    {
        name: "[Python] Function Parameters",
        scope: [
            "source.python meta.item-access.python meta.qualified-name.python meta.generic-name.python",
            "source.python meta.function.parameters.annotation.python meta.item-access.python meta.qualified-name.python meta.generic-name.python",
        ],
        settings: {
            foreground: "var(yellow)",
        },
    },
];
