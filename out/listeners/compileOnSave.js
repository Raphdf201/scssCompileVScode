"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileOnSave = compileOnSave;
const vscode_1 = require("vscode");
const utils_1 = require("../utils");
async function compileOnSave(document) {
    const canCompile = vscode_1.workspace.getConfiguration("scss-compiler").get("compile-on-save")
        && (document.fileName.endsWith(".scss")
            || document.fileName.endsWith(".sass"));
    if (canCompile && vscode_1.workspace.getConfiguration("scss-compiler").get("compile-all-on-save")) {
        (0, utils_1.log)("Compiling all SCSS and SASS files...");
        const files = await vscode_1.workspace.findFiles("**/*.{scss,sass}");
        if (files.length === 0) {
            vscode_1.window.showInformationMessage("No SCSS or SASS files found in the workspace.");
            return;
        }
        (0, utils_1.compileAndWriteAll)(files);
        (0, utils_1.log)("Compilation completed.");
    }
    else if (canCompile) {
        (0, utils_1.log)("Compiling file : " + document.fileName);
        (0, utils_1.compileAndWrite)(document.fileName);
        (0, utils_1.log)("Compilation completed.");
    }
    else {
        (0, utils_1.log)("Did not compile any file");
    }
}
//# sourceMappingURL=compileOnSave.js.map