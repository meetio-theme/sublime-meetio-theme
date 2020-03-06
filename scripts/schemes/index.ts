// @ts-ignore
import {
    generateScheme,
    ISchemeSetting,
    IColors,
    IRules,
} from '@meetio/scheme-generator';

import { light, dark } from './pallete';

interface IScheme {
    name: string;
    author: string;
    variables: IColors;
    customRules: Array<IRules>;
}

[
    {
        name: 'Meetio-Theme-Dark',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: dark,
        customRules: [],
    },
    {
        name: 'Meetio-Theme-Light',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: light,
        customRules: [],
    }
].map((item: IScheme) => {
    const settings: ISchemeSetting = {
        colors: item.variables,
        rules: item.customRules,
    };
    generateScheme(item.name, item.author, item.name, settings, 'schemes');
});
