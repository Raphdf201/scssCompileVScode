"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileAll = void 0;
const vscode_1 = require("vscode");
const utils_1 = require("../utils/utils");
exports.compileAll = vscode_1.commands.registerCommand("scss-compiler.compile-all", async () => {
    (0, utils_1.log)("Compiling all SCSS and SASS files...");
    const files = await vscode_1.workspace.findFiles("**/*.{scss,sass}");
    if (files.length === 0) {
        vscode_1.window.showInformationMessage("No SCSS or SASS files found in the workspace.");
        return;
    }
    (0, utils_1.compileAndWriteAll)(files);
    (0, utils_1.log)("Compilation completed.");
});
//# sourceMappingURL=compileAll.js.map