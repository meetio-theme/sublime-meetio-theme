import { options, Rules } from '@meetio/scheme-generator';
import { SchemeSetting } from '@meetio/scheme-generator';

import { getColors, type Theme } from './colors';

const { ui, ...rest } = options;

const rules: Rules[] = [
    {
        name: 'PYTHON - Parameters Annotation ',
        scope: [
            'source.python meta.function.parameters.annotation.python meta.qualified-name.python meta.generic-name.python',
        ],
        settings: {
            foreground: 'var(blue)',
        },
    },
    {
        name: 'ENTITY - Filenames',
        scope: ['entity.name.filename'],
        settings: {
            foreground: 'var(green)',
        },
    },
];

export function getScheme(theme: Theme): SchemeSetting {
    return {
        colors: getColors(theme),
        ui: {
            ...ui,
            ...{
                line_diff_width: '5',
                tags_options: 'underline',
                brackets_options: 'glow',
            },
        },
        rules: [
            ...[].concat.apply(
                [],
                Object.values(rest).map((item) => item)
            ),
            ...rules,
        ],
    };
}
