import * as path from 'path';
import { generateScheme, getScheme } from './scheme';
import { Scheme, Theme } from './interfaces';
import { generateTheme, getThemeHidden, getThemeDefault, getThemeHighContrast } from './theme';

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

[
    {
        settings: getThemeHidden(),
        output: {
            filename: 'Meetio Theme',
            extension: '.hidden-theme',
            // eslint-disable-next-line no-undef
            path: path.resolve(__dirname, '../themes')
        },
    },
    {
        settings: getThemeDefault(),
        output: {
            filename: 'Meetio Theme',
        },
    },
    {
        settings: getThemeHighContrast(),
        output: {
            filename: 'Meetio Theme Hight Contrast',
        },
    },
].map((theme: Theme) => {
    generateTheme({
        output: theme.output,
        settings: theme.settings,
    });
});
