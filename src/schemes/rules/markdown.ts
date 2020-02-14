export default [
    {
        name: '[Markdown] Punctuation inside inline raw',
        scope: [
            'text.html.markdown meta.block-level.markdown meta.table.markdown-gfm markup.raw.inline.markdown punctuation.definition.raw.end.markdown',
            'text.html.markdown meta.block-level.markdown meta.table.markdown-gfm markup.raw.inline.markdown punctuation.definition.raw.begin.markdown',
        ],
        settings: {
            foreground: 'color(var(cyan) alpha(0.8))',
        },
    },
    {
        name:
            '[Markdown] - Color for Punctuation — Heading, `Code` and fenced ```code blocks```, **Bold**, _Italic_',
        scope: [
            'punctuation.definition.raw.begin.markdown',
            'punctuation.definition.raw.end.markdown',
            'punctuation.definition.raw.code-fence.begin.markdown',
            'punctuation.definition.raw.code-fence.end.markdown',
            'punctuation.definition.heading.begin.markdown',
            'punctuation.definition.bold.begin.markdown',
            'punctuation.definition.bold.end.markdown',
            'punctuation.definition.italic.begin.markdown',
            'punctuation.definition.italic.end.markdown',
        ],
        settings: {
            foreground: 'color(var(background) blend(var(foreground) 75%))',
        },
    },
];
