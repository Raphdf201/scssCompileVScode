"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const utils_1 = require("./utils");
const vscode_1 = require("vscode");
/**
 * Ran when the extension is activated
 */
function activate(context) {
    (0, utils_1.log)("SCSS Compiler enabled");
    (0, utils_1.log)("Logging can be disabled by changing the scss-compiler.send-messages setting");
    context.subscriptions.push(compileAll, compileCurrent, onSaveListener);
}
/**
 * Ran when the extension is disabled
 */
function deactivate() {
    (0, utils_1.log)("SCSS Compiler disabled");
}
/**
 * Compile the file that is currently being edited by the user
 */
const compileCurrent = vscode_1.commands.registerCommand("scss-compiler.compile-current-file", () => {
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
/**
 * Compile all of the scss files in the workspace
 */
const compileAll = vscode_1.commands.registerCommand("scss-compiler.compile-all", async () => {
    (0, utils_1.log)("Compiling all SCSS and SASS files...");
    const files = await vscode_1.workspace.findFiles("**/*.{scss,sass}");
    if (files.length === 0) {
        vscode_1.window.showInformationMessage("No SCSS or SASS files found in the workspace.");
        return;
    }
    (0, utils_1.compileAndWriteAll)(files);
    (0, utils_1.log)("Compilation completed.");
});
/**
 * On save listener
 */
const onSaveListener = vscode_1.workspace.onDidSaveTextDocument(async (document) => {
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
});
//# sourceMappingURL=extension.js.map