"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onSave = void 0;
const vscode_1 = require("vscode");
const compileOnSave_1 = require("./compileOnSave");
exports.onSave = vscode_1.workspace.onDidSaveTextDocument((document) => {
    (0, compileOnSave_1.compileOnSave)(document);
});
//# sourceMappingURL=listeners.js.map