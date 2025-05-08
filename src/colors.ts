import { base } from '@meetio/meetio-colors/dist/variations/base';
import { darker } from '@meetio/meetio-colors/dist/variations/darker';
import { lighter } from '@meetio/meetio-colors/dist/variations/lighter';
import { palenight } from '@meetio/meetio-colors/dist/variations/palenight';
import { deepocean } from '@meetio/meetio-colors/dist/variations/deepocean';

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
