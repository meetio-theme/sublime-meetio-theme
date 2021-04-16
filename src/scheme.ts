import {
    generateScheme,
    options,
    Rules,
    SchemeSetting,
} from '@meetio/scheme-generator';

import { getColors, Theme } from './colors';

const { ui, ...rest} = options;

interface Scheme {
    name: string;
    author: string;
    variables: SchemeSetting;
}

const global = {
    ...ui,
    ...{
        tags_options: 'underline',
        brackets_options: 'underline, glow',
        line_highlight: '#00000040',
        selection: '#61616150',
        gutter_foreground: '#424242',
        shadow: '#00000030',
        find_highlight: '#FFCC00',
        inactive_selection: '#00000030',
    },
};

const rules: Rules[] = [
    {
        name: 'PYTHON - Parameters Annotation ',
        scope: [
            'source.python meta.function.parameters.annotation.python meta.qualified-name.python meta.generic-name.python',
        ],
        settings: {
            foreground: 'var(blue)',
        },
    },
    {
        name: 'ENTITY - Filenames',
        scope: ['entity.name.filename'],
        settings: {
            foreground: 'var(green)',
        },
    },
];

export function getScheme(theme: Theme) {
    return {
        colors: getColors(theme),
        ui: global,
        rules: [
            ...[].concat.apply([], Object.values(rest).map(item => item)),
            ...rules
        ],
    };
}

[
    {
        name: 'Meetio Lighter',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: getScheme('lighter'),
    },
    {
        name: 'Meetio Darker',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: getScheme('darker'),
    },
    {
        name: 'Meetio Palenight',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: getScheme('palenight'),
    },
    {
        name: 'Meetio Deepocean',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: getScheme('deepocean'),
    },
].map((scheme: Scheme) => {
    const { colors, rules, ui } = scheme.variables;
    generateScheme({
        name: scheme.name,
        author: scheme.author,
        output: {
            filename: scheme.name,
        },
        settings: {
            colors,
            ui,
            rules,
        },
    });
});
