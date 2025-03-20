"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileOnSave = compileOnSave;
const vscode_1 = require("vscode");
const compiler_1 = require("../compiler");
function compileOnSave(document) {
    if (vscode_1.workspace.getConfiguration("scss-compiler").get("compile-on-save")
        && (document.fileName.endsWith(".scss")
            || document.fileName.endsWith(".sass"))) {
        vscode_1.window.showInformationMessage("Compiling file : " + document.fileName);
        (0, compiler_1.compileAndWrite)(document.fileName);
        vscode_1.window.showInformationMessage("Compilation completed.");
    }
}
//# sourceMappingURL=compileOnSave.js.map