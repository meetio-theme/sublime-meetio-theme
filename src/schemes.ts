import { generateScheme, ISchemeSetting } from '@meetio/scheme-generator';
import * as pallete from '@meetio/meetio-colors';
import * as rules from './schemes/files/index';

[
    {
        name: 'Meetio-Theme-Dark',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: pallete.dark,
    },
    {
        name: 'Meetio-Theme-Light',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: pallete.light,
    },
].map(item => {
    const settings: ISchemeSetting = {
        colors: item.variables,
        rules: [],
    };
    generateScheme(item.name, item.author, item.name, settings, 'schemes');
});
