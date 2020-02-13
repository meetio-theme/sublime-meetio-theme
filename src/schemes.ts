import { generateScheme, ISchemeSetting } from '@meetio/scheme-generator';
import * as pallete from '@meetio/meetio-colors';

interface IScheme {
    name: string;
    author: string;
    variables: string[];
}

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
].map((item: IScheme) => {
    const settings: ISchemeSetting = {
        colors: item.variables,
        rules: [],
    };
    generateScheme(item.name, item.author, item.name, settings, 'schemes');
});
