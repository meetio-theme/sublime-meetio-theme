/*eslint-disable no-undef */
module.exports = [
    {
        name: "[JavaScript] Constructor",
        scope: [
            "source.ts meta.export.default.ts meta.class.ts meta.method.declaration.ts storage.type.ts",
            "meta.function-call.constructor.ts",
            "entity.name.function.constructor.ts",
            "variable.language.constructor.ts",
        ],
        settings: {
            foreground: "var(purple)",
        },
    },
    {
        name: "[Typescript] Declaration",
        scope: [
            "source.ts meta.export.default.ts meta.class.ts meta.method.declaration.ts meta.parameters.ts meta.type.annotation.ts entity.name.type.ts",
            "source.ts meta.class.ts meta.method.declaration.ts meta.parameters.ts meta.type.annotation.ts entity.name.type.ts",
            "source.ts meta.export.default.ts meta.class.ts meta.field.declaration.ts meta.type.annotation.ts entity.name.type.ts",
        ],
        settings: {
            foreground: "var(yellow)",
        },
    },
    {
        name: "[Typescript] Primitive",
        scope: ["support.type.primitive.ts"],
        settings: {
            foreground: "var(pink)",
        },
    },
    {
        name: "[JavaScript] Try Catch",
        scope: ["keyword.control.trycatch.ts, keyword.control.trycatch.tsx"],
        settings: {
            foreground: "var(cyan)",
        },
    },
    {
        name: "[JavaScript] Loop",
        scope: ["keyword.control.loop.ts, keyword.control.loop.tsx"],
        settings: {
            foreground: "var(cyan)",
        },
    },
    {
        name: "[Typescript] Parameters",
        scope: [
            "source.ts meta.class.ts meta.method.declaration.ts meta.parameters.ts variable.parameter.ts",
            "variable.parameter.function.ts",
            "source.ts meta.export.default.ts meta.class.ts meta.method.declaration.ts meta.parameters.ts variable.parameter.ts",
        ],
        settings: {
            foreground: "var(red)",
        },
    },
    {
        name: "[Typescript] Object Key",
        scope: ["meta.object-literal.key.ts"],
        settings: {
            foreground: "var(blue)",
        },
    },
    {
        name: "[Typescript] Dollar",
        scope: ["variable.other.dollar.only.ts"],
        settings: {
            foreground: "var(cyan)",
        },
    },
    {
        name: "[Typescript] Try Catch",
        scope: ["keyword.control.trycatch.ts"],
        settings: {
            foreground: "var(cyan)",
        },
    },
    {
        name: "[Typescript] Loop",
        scope: [
            "keyword.control.loop.ts",
            "source.tsx meta.export.default.tsx meta.class.tsx meta.method.declaration.tsx meta.block.tsx meta.array.literal.tsx keyword.control.as.tsx",
        ],
        settings: {
            foreground: "var(cyan)",
        },
    },
    {
        name: "[Typescript] Field Declaration",
        scope: [
            "source.tsx meta.export.default.tsx meta.class.tsx meta.field.declaration.tsx meta.type.annotation.tsx entity.name.type.tsx",
        ],
        settings: {
            foreground: "var(yellow)",
        },
    },
    {
        name: "[Typescript] Method Declaration",
        scope: [
            "source.tsx meta.export.default.tsx meta.class.tsx meta.method.declaration.tsx meta.block.tsx meta.function-call.tsx variable.other.object.tsx",
            "source.tsx meta.export.default.tsx meta.class.tsx meta.field.declaration.tsx meta.type.annotation.tsx entity.name.type.module.tsx",
        ],
        settings: {
            foreground: "var(brown)",
        },
    },
    {
        name: "[Typescript] Object",
        scope: ["source.ts meta.function-call.ts variable.other.object.ts"],
        settings: {
            foreground: "var(yellow)",
        },
    },
];
