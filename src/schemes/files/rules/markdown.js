module.exports = [
    {
        name: "[Markdown] Deleted",
        scope: ["markup.deleted"],
        settings: {
            foreground: "var(red)",
        },
    },
    {
        name: "[Markdown] Inserted",
        scope: ["markup.inserted"],
        settings: {
            foreground: "var(green)",
        },
    },
    {
        name: "[Markdown] Changed",
        scope: ["markup.changed"],
        settings: {
            foreground: "var(blue)",
        },
    },
    {
        name: "[Markdown] Headings",
        scope: [
            "markdown.heading",
            "markup.heading | markup.heading entity.name",
        ],
        settings: {
            font_style: "bold",
            foreground: "var(green)",
        },
    },
    {
        name: "[Markdown] Links",
        scope: ["string.other.link", "markup.underline.link"],
        settings: {
            font_style: "italic",
            foreground: "var(purple)",
        },
    },
    {
        name: "[Markdown] Link Description",
        scope: [
            "entity.name.reference.link.markdown",
            "string.other.link.description.title.markdown",
            "markup.underline.link.image.markdown",
        ],
        settings: {
            foreground: "var(purple)",
        },
    },
    {
        name: "[Markdown] Link Description",
        scope: [
            "markup.list.unnumbered.markdown meta.paragraph.list.markdown meta.link.inline.description.markdown",
            "meta.block-level.markdown markup.quote.markdown meta.link.inline.description.markdown",
            "text.html.markdown meta.paragraph.markdown meta.link.inline.description.markdown",
        ],
        settings: {
            foreground: "var(yellow)",
        },
    },
    {
        name: "[Markdown] Image Inline",
        scope: [
            "meta.paragraph.markdown meta.link.inline.description.markdown",
            "meta.paragraph.markdown meta.image.inline.description.markdown",
        ],
        settings: {
            foreground: "var(orange)",
        },
    },
    {
        name: "[Markdown] Bold",
        scope: ["markup.bold"],
        settings: {
            font_style: "bold",
            foreground: "var(red)",
        },
    },
    {
        name: "[Markdown] Italic",
        scope: ["markup.italic"],
        settings: {
            font_style: "italic",
            foreground: "var(red)",
        },
    },
    {
        name: "[Markdown] Bold & Italic",
        scope: ["markup.italic markup.bold | markup.bold markup.italic"],
        settings: {
            font_style: "bold italic",
        },
    },
    {
        name: "[Markdown] Numbered List Bullet",
        scope: ["markup.list.numbered.bullet"],
        settings: {
            foreground: "var(green)",
        },
    },
    {
        name: "[Markdown] Code Inline",
        scope: ["markup.raw.inline"],
        settings: {
            background: "color(var(blue) alpha(0.05))",
        },
    },
    {
        name: "[Markdown] Code Block",
        scope: [
            "meta.paragraph.markdown meta.code-fence.definition.begin.text.markdown-gfm",
            "meta.paragraph.markdown meta.code-fence.definition.end.text.markdown-gfm",
            "meta.paragraph.markdown markup.raw.code-fence.markdown-gfm",
        ],
        settings: {
            background: "color(var(blue) alpha(0.05))",
        },
    },
    {
        name: "[Markdown] Blockquotes",
        scope: [
            "text.html.markdown meta.block-level.markdown markup.quote.markdown",
        ],
        settings: {
            font_style: "italic",
        },
    },
    {
        name: "[Markdown] Punctuation inside inline raw",
        scope: [
            "text.html.markdown meta.block-level.markdown meta.table.markdown-gfm markup.raw.inline.markdown punctuation.definition.raw.end.markdown",
            "text.html.markdown meta.block-level.markdown meta.table.markdown-gfm markup.raw.inline.markdown punctuation.definition.raw.begin.markdown",
        ],
        settings: {
            foreground: "color(var(cyan) alpha(0.8))",
        },
    },
    {
        name:
            "[Markdown] - Color for Punctuation — Heading, `Code` and fenced ```code blocks```, **Bold**, _Italic_",
        scope: [
            "punctuation.definition.raw.begin.markdown",
            "punctuation.definition.raw.end.markdown",
            "punctuation.definition.raw.code-fence.begin.markdown",
            "punctuation.definition.raw.code-fence.end.markdown",
            "punctuation.definition.heading.begin.markdown",
            "punctuation.definition.bold.begin.markdown",
            "punctuation.definition.bold.end.markdown",
            "punctuation.definition.italic.begin.markdown",
            "punctuation.definition.italic.end.markdown",
        ],
        settings: {
            foreground: "color(var(background) blend(var(foreground) 85%))",
        },
    },
]
