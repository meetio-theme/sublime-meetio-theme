import ini from './rules/ini';
import markdown from './rules/markdown';
import sublimelinter from './rules/sublimelinter';
import vue from './rules/vue';

export default [...ini, ...markdown, ...sublimelinter, ...vue];
