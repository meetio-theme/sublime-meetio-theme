import { darker } from '@meetio/meetio-colors';
import { rules } from './rules';

export default {
    colors: darker,
    ui: {
        tags_options: 'underline',
        brackets_options: 'underline',
        line_highlight: '#00000040',
        selection: '#61616150',
        gutter_foreground: '#424242',
        shadow: '#00000030',
        find_highlight: '#FFCC00',
        inactive_selection: '#00000030',
    },
    rules,
}
