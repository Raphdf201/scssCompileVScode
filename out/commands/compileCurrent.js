"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileCurrent = void 0;
const vscode_1 = require("vscode");
const utils_1 = require("../utils/utils");
exports.compileCurrent = vscode_1.commands.registerCommand("scss-compiler.compile-current-file", () => {
    const editor = vscode_1.window.activeTextEditor;
    if (!editor) {
        vscode_1.window.showInformationMessage("No active text editor found.");
        return;
    }
    const filePath = editor.document.fileName;
    if (!filePath.endsWith(".scss") && !filePath.endsWith(".sass")) {
        vscode_1.window.showInformationMessage("Current file is not a SCSS or SASS file.");
        return;
    }
    (0, utils_1.log)("Compiling file : " + filePath);
    (0, utils_1.compileAndWrite)(filePath);
    (0, utils_1.log)("Compilation completed.");
});
//# sourceMappingURL=compileCurrent.js.map