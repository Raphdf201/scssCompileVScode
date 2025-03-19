"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
const compiler_1 = require("./compiler");
const compileAll_1 = require("./commands/compileAll");
function activate(context) {
    console.log("scss-compile enabled");
    context.subscriptions.push(compileAll_1.compileAll, vscode.commands.registerCommand("scss-compiler.compile-current-file", () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showInformationMessage("No active text editor found.");
            return;
        }
        const filePath = editor.document.fileName;
        if (!filePath.endsWith(".scss") && !filePath.endsWith(".sass")) {
            vscode.window.showInformationMessage("Current file is not a SCSS or SASS file.");
            return;
        }
        vscode.window.showInformationMessage("Compiling file : " + filePath);
        (0, compiler_1.compileAndWrite)(filePath);
        vscode.window.showInformationMessage("Compilation completed.");
    }), vscode.commands.registerCommand("scss-compiler.show-settings", () => {
        vscode.window.showInformationMessage("Minify : " + vscode.workspace.getConfiguration("scss-compiler").get("minify"));
        vscode.window.showInformationMessage("Compile on save : " + vscode.workspace.getConfiguration("scss-compiler").get("compile-on-save"));
    }), vscode.workspace.onDidSaveTextDocument((document) => {
        if (vscode.workspace.getConfiguration("scss-compiler").get("compile-on-save")
            && (document.fileName.endsWith(".scss")
                || document.fileName.endsWith(".sass"))) {
            vscode.window.showInformationMessage("Compiling file : " + document.fileName);
            (0, compiler_1.compileAndWrite)(document.fileName);
            vscode.window.showInformationMessage("Compilation completed.");
        }
        else {
            vscode.window.showInformationMessage("File not compiled : " + document.fileName);
        }
    }));
}
function deactivate() {
    console.log("scss-compile disabled");
}
//# sourceMappingURL=extension.js.map