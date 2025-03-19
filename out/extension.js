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
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
function activate(context) {
    console.log("scss-compile enabled");
    const compileAll = vscode.commands.registerCommand("scss-compiler.compile-all", async () => {
        vscode.window.showInformationMessage("Compiling all SCSS and SASS files...");
        // Find all .scss and .sass files in the workspace
        const files = await vscode.workspace.findFiles("**/*.{scss,sass}");
        if (files.length === 0) {
            vscode.window.showInformationMessage("No SCSS or SASS files found in the workspace.");
            return;
        }
        // Compile each file
        files.forEach((file) => {
            const filePath = file.fsPath;
            console.log(`Compiling: ${filePath}`);
            (0, compiler_1.compileAndWrite)(filePath);
        });
        vscode.window.showInformationMessage("Compilation completed.");
    });
    context.subscriptions.push(compileAll);
}
// This method is called when your extension is deactivated
function deactivate() {
    console.log("scss-compile disabled");
}
//# sourceMappingURL=extension.js.map