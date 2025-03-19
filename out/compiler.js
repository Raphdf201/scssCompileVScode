"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileSCSS = compileSCSS;
const sass = require('sass');
/**
 * Compiles a scss or sass file to css using sass
 * @argument path the path to the scss or sass file to compile
 * @returns the compiled css
 */
function compileSCSS(path) {
    return sass.compile(path).css;
}
//# sourceMappingURL=compiler.js.map