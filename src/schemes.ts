import {
    generateScheme,
    ISchemeSetting,
    IColors,
    IRules
} from '@meetio/scheme-generator';
import * as pallete from '@meetio/meetio-colors';

// common rules for all schemes
import rules from './schemes/index';

interface IScheme {
    name: string;
    author: string;
    variables: IColors;
    customRules: Array<IRules>; // specific rules for each IScheme
}

[
    {
        name: 'Meetio-Theme-Dark',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: pallete.dark,
        customRules: [],
    },
    {
        name: 'Meetio-Theme-Light',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: pallete.light,
        customRules: [],
    },
].map((item: IScheme) => {
    const settings: ISchemeSetting = {
        colors: item.variables,
        rules: [...rules, ...item.customRules],
    };
    generateScheme(item.name, item.author, item.name, settings, 'schemes');
});
