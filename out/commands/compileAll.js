"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileAll = void 0;
const vscode_1 = require("vscode");
const compiler_1 = require("../compiler");
exports.compileAll = vscode_1.commands.registerCommand("scss-compiler.compile-all", async () => {
    vscode_1.window.showInformationMessage("Compiling all SCSS and SASS files...");
    const files = await vscode_1.workspace.findFiles("**/*.{scss,sass}");
    if (files.length === 0) {
        vscode_1.window.showInformationMessage("No SCSS or SASS files found in the workspace.");
        return;
    }
    (0, compiler_1.compileAndWriteAll)(files);
    vscode_1.window.showInformationMessage("Compilation completed.");
});
//# sourceMappingURL=compileAll.js.map