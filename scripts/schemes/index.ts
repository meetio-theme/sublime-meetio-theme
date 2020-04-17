// @ts-ignore
import {
    generateScheme,
    ISchemeSetting,
    IRules,
    IColors,
} from '@meetio/scheme-generator';

import { light, dark } from '@meetio/meetio-colors';

interface UI {
    [key: string]: string;
}

interface IScheme {
    name: string;
    author: string;
    variables: IColors;
    customeUi: UI;
    customeRules: Array<IRules>;
}

[
    {
        name: 'Meetio-Theme-Dark',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: dark,
        customeUi: {
            tags_foreground: 'var(cyan)',
        },
        customeRules: [],
    },
    {
        name: 'Meetio-Theme-Light',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: light,
        customeUi: {
            tags_foreground: 'var(cyan)',
        },
        customeRules: [],
    },
].map((item: IScheme) => {
    const { variables, customeRules, customeUi } = item;
    const settings: ISchemeSetting = {
        colors: variables,
        rules: customeRules,
        ui: {
            ...customeUi,
            ...{
                tags_options: 'underline, glow',
                brackets_options: 'underline, glow',
            },
        },
    };
    generateScheme(item.name, item.author, item.name, settings, 'schemes');
});
