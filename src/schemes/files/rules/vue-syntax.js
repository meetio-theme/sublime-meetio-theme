module.exports = [
    {
        name: "[Vue] Function Parameter",
        scope: [
            "text.html.vue source.js.embedded.html source.js meta.export.js meta.object-literal.js meta.object-literal.js meta.function.declaration.js meta.binding.name.js variable.parameter.function.js",
        ],
        foreground: "var(pink)",
    },
    {
        name: "[Vue] Object",
        scope: [
            "text.html.vue source.js.embedded.html source.js meta.export.js meta.object-literal.js meta.object-literal.key.js",
        ],
        foreground: "var(purple)",
    },
    {
        name: "[Vue] Object Value",
        scope: [
            "text.html.vue source.js.embedded.html source.js meta.export.js meta.object-literal.js meta.function.js meta.block.js meta.object-literal.js meta.object-literal.js meta.object-literal.key.js",
        ],
        foreground: "var(brown)"
    }
]
