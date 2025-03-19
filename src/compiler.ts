import * as vscode from 'vscode';

const sass = require('sass');

/**
 * Compiles a scss or sass file to css using sass
 * @argument path the path to the scss or sass file to compile
 * @returns the compiled css
 */
export function compileSCSS(path: string): string {
    return sass.compile(path).css;
}

/**
 * Compiles a scss or sass file to css using sass and write the result to a file of the same name with a .css extension
 * @argument path the path to the scss or sass file to compile
 */
export function compileAndWrite(path: string) {
    const css = compileSCSS(path);
    const cssPath = path.replace(/\.[^/.]+$/, ".css");
    vscode.workspace.fs.writeFile(vscode.Uri.file(cssPath), Buffer.from(css));
}
