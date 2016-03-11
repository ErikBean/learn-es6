import babel from 'rollup-plugin-babel';

export default {
    entry: 'index.js',
    format: 'es6',
    dest: 'bundle.js',
    plugins: [ babel() ]
}