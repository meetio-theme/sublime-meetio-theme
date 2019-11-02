module.exports = [
    {
        name: "[GitGutter] Deleted",
        scope: ["markup.deleted.git_gutter"],
        settings: {
            foreground: "var(diffDeleted)",
        },
    },
    {
        name: "[GitGutter] Inserted",
        scope: ["markup.inserted.git_gutter"],
        settings: {
            foreground: "var(diffAdded)",
        },
    },
    {
        name: "[GitGutter] Modified",
        scope: ["markup.changed.git_gutter"],
        settings: {
            foreground: "var(diffModified)",
        },
    },
]
