import { lighter, darker, palenight, deepocean } from '@meetio/meetio-colors';

import { Colors } from '@meetio/scheme-generator';

export type Theme = 'lighter' | 'darker' | 'palenight' | 'deepocean';

export function getColors(theme: Theme): Colors {
    if (theme === 'lighter') {
        return lighter;
    } else if (theme === 'darker') {
        return darker;
    } else if (theme === 'palenight') {
        return palenight;
    } else {
        return deepocean;
    }
}
