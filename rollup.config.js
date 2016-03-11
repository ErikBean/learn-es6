import babel from 'rollup-plugin-babel';

export default {
    entry: 'src/index.js',
    format: 'es6',
    dest: 'bundle.js',
    plugins: [ babel() ]
}