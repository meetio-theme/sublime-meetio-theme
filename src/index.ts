import { generateScheme, getScheme } from './scheme';
import { Scheme, Theme } from './interfaces';
import { generateTheme, getTheme, getThemeDefault, getThemeHighContrast } from './theme';

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
        name: 'Meetio Theme',
        settings: getTheme(),
        hidden: true,
    },
    {
        name: 'Meetio Theme',
        settings: getThemeDefault(),
        hidden: false,
    },
    {
        name: 'Meetio Theme - Hight Contrast',
        settings: getThemeHighContrast(),
        hidden: false,
    },
].map((theme: Theme) => {
    generateTheme({
        output: {
            filename: theme.name,
            extension: theme.hidden ? '.hidden-theme' : '.sublime-theme',
        },
        settings: theme.settings,
    });
});
