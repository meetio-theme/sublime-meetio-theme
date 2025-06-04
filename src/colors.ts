import {
    base,
    darker,
    deepocean,
    lighter,
    palenight,
} from '@meetio/meetio-colors';

import { Colors } from '@meetio/scheme-generator';

export type Theme =
    | 'default'
    | 'lighter'
    | 'darker'
    | 'palenight'
    | 'deepocean';

export function getColors(theme: Theme): Colors {
    if (theme === 'default') {
        return base;
    } else if (theme === 'lighter') {
        return lighter;
    } else if (theme === 'darker') {
        return darker;
    } else if (theme === 'palenight') {
        return palenight;
    } else {
        return deepocean;
    }
}
