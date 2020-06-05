import {
    generateScheme,
    ISchemeSetting,
    IRules,
    IColors,
} from '@meetio/scheme-generator';

import { light, dark } from '@meetio/meetio-colors';
import { customeRules } from './customeRules';

interface IScheme {
    name: string;
    author: string;
    variables: IColors;
    customeRules: Array<IRules>;
}

[
    {
        name: 'Meetio-Theme-Dark',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: dark,
        customeRules
    },
    {
        name: 'Meetio-Theme-Light',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: light,
        customeRules
    },
].map((item: IScheme) => {
    const { variables, customeRules } = item;
    const settings: ISchemeSetting = {
        colors: {
            accent: "#80CBC4",
            ...variables
        },
        rules: customeRules,
        ui: {
            accent: 'var(accent)',
            bracket_contents_options: 'underline',
            brackets_options: 'underline, glow',
            gutter_foreground_highlight: 'var(foreground)',
            scroll_highlight: 'var(yellow)',
            scroll_selected_highlight: 'var(cyan)'
        },
    };
    generateScheme(item.name, item.author, item.name, settings, 'schemes');
});
