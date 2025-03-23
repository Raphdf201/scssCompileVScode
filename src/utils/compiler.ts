import { workspace, Uri } from 'vscode';

const sass = require('sass');

/**
 * Compiles a scss or sass file to css using sass
 * @argument path the path to the scss or sass file to compile
 * @returns the compiled css
 */
export function compileSCSS(path: string): string {
    if (workspace.getConfiguration("scss-compiler").get<boolean>("minify")) {
        return sass.compile(path, { style: "compressed" }).css;
    } else {
        return sass.compile(path, { style: "expanded" }).css;
    }
}

/**
 * Compiles a scss or sass file to css using sass and write the result to a file of the same name with a .css extension
 * @argument path the path to the scss or sass file to compile
 */
export function compileAndWrite(path: string) {
    const css = compileSCSS(path);
    const cssPath = path.replace(/\.[^/.]+$/, ".css");
    workspace.fs.writeFile(Uri.file(cssPath), Buffer.from(css));
}

export function compileAndWriteAll(files: Uri[]) {
    files.forEach((file) => {
        const filePath = file.fsPath;
        compileAndWrite(filePath);
    });
}
