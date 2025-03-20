"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showSettings = void 0;
const vscode_1 = require("vscode");
exports.showSettings = vscode_1.commands.registerCommand("scss-compiler.show-settings", () => {
    vscode_1.window.showInformationMessage("Minify : " + vscode_1.workspace.getConfiguration("scss-compiler").get("minify"));
    vscode_1.window.showInformationMessage("Compile on save : " + vscode_1.workspace.getConfiguration("scss-compiler").get("compile-on-save"));
});
//# sourceMappingURL=showSettings.js.map