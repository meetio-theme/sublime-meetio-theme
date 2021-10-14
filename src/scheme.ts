import { options, Rules } from '@meetio/scheme-generator';
export { generateScheme } from '@meetio/scheme-generator';
import { getColors, Theme } from './colors';

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

export function getScheme(theme: Theme) {
    const { base } = getColors(theme);

    const colors = {
        ...getColors(theme),
        diffModified: `${base?.blue}60`,
        diffAdded: `${base?.green}60`,
        diffDeleted: `${base?.red}60`,
    };

    return {
        colors,
        ui: {
            ...ui,
            ...{
                line_diff_width: '3',
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
