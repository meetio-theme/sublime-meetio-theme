import { lighter } from '@meetio/meetio-colors';
import { rules } from './rules';

export default {
    colors: lighter,
    ui: {
        tags_options: 'underline',
        brackets_options: 'underline, glow',
        line_highlight: '#CCD7DA90',
        selection: '#80CBC440',
        gutter_foreground: '#CFD8DC',
        shadow: '#00000020',
        find_highlight: '#FFCC00',
        inactive_selection: '#CCD7DA50',
    },
    rules,
}
