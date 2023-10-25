const {src, dest, series} = require('gulp');

const srcDir = '${webjar.staging}/node_modules/@fortawesome/fontawesome-free/';
const destDir = '${webjar.target}/';

function task1() {
    return _copy('*.txt');
}

function task2() {
    return _copy('css/**', 'dist/css');
}

function task3() {
    return _copy('svgs/**', 'dist/svgs');
}

function task4() {
    return _copy('webfonts/**', 'dist/webfonts');
}

function task5() {
    return _copy('sprites/**', 'dist/sprites');
}

function _toSrc(_src) {
    return src(_src, {allowEmpty: false, cwd: srcDir});
}

function _toDest(_dest) {
    return dest(_dest || '.', {cwd: destDir});
}

function _copy(_src, _dest) {
    console.log('  Copying ' + _src);
    return _toSrc(_src).pipe(_toDest(_dest))
}

exports.default = series(task1, task2, task3, task4, task5);
