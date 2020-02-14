import ini from './rules/ini';
import sublimelinter from './rules/sublimelinter';
import vue from './rules/vue';

export default [...ini, ...sublimelinter, ...vue];
