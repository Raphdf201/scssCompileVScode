const sass = require('sass');

/**
 * Compiles a scss or sass file to css using sass
 * @argument path the path to the scss or sass file to compile
 * @returns the compiled css
 */
export function compileSCSS(path: string): string {
    return sass.compile(path).css;
}
