import { generateScheme, ISchemeSetting } from '@meetio/scheme-generator';

import { lighter, darker, palenight, deepocean } from './settings';

interface IScheme {
    name: string;
    author: string;
    variables: ISchemeSetting;
}

[
    {
        name: 'Meetio Lighter',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: lighter,
    },
    {
        name: 'Meetio Darker',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: darker,
    },
    {
        name: 'Meetio Palenight',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: palenight,
    },
    {
        name: 'Meetio Deepocean',
        author: 'Terminal <https://github.com/TheSecEng>',
        variables: deepocean,
    },
].map((scheme: IScheme) => {
    const { colors, rules, ui } = scheme.variables;

    generateScheme({
        name: scheme.name,
        author: scheme.author,
        schemeName :scheme.name,
        settings: {
            colors,
            rules,
            ui,
        }
    });
});
