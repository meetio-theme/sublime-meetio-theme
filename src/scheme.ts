import { options, Rules } from '@meetio/scheme-generator';
export { generateScheme } from '@meetio/scheme-generator';
import { getColors, Theme } from './colors';

const { ui, ...rest } = options;

const global = {
    ...ui,
    ...{
        tags_options: 'underline',
        brackets_options: 'underline, glow',
        line_highlight: '#00000040',
        selection: '#61616150',
        gutter_foreground: '#424242',
        shadow: '#00000030',
        find_highlight: '#FFCC00',
        inactive_selection: '#00000030',
    },
};

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
    return {
        colors: getColors(theme),
        ui: global,
        rules: [
            ...[].concat.apply(
                [],
                Object.values(rest).map((item) => item)
            ),
            ...rules,
        ],
    };
}
