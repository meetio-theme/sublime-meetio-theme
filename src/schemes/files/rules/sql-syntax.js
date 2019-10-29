module.exports = [
    {
        name: "[SQL] Source",
        scope: "source.sql",
        foreground: "var(foreground)",
    },
    {
        name: "[SQL] — Other keywords",
        scope: "keyword.other.DML.sql",
        foreground: "var(blue)",
    },
    {
        name: "[SQL] — Function",
        scope: "support.function.aggregate.sql",
        foreground: "var(pink)",
    }
]
