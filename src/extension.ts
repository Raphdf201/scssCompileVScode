import * as vscode from "vscode";
import { compileAndWrite } from "./compiler";
import { compileAll } from "./commands/compileAll";

export function activate(context: vscode.ExtensionContext) {
	console.log("scss-compile enabled");

	context.subscriptions.push(
		compileAll,
		vscode.commands.registerCommand("scss-compiler.compile-current-file", () => {	// Compile current file
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
			compileAndWrite(filePath);
			vscode.window.showInformationMessage("Compilation completed.");
		}), vscode.commands.registerCommand("scss-compiler.show-settings", () => {			// Show settings
			vscode.window.showInformationMessage("Minify : " + vscode.workspace.getConfiguration("scss-compiler").get<boolean>("minify"));
			vscode.window.showInformationMessage("Compile on save : " + vscode.workspace.getConfiguration("scss-compiler").get<boolean>("compile-on-save"));
		}), vscode.workspace.onDidSaveTextDocument((document) => {							// On save
			if (vscode.workspace.getConfiguration("scss-compiler").get<boolean>("compile-on-save")
				&& (document.fileName.endsWith(".scss")
					|| document.fileName.endsWith(".sass"))) {
				vscode.window.showInformationMessage("Compiling file : " + document.fileName);
				compileAndWrite(document.fileName);
				vscode.window.showInformationMessage("Compilation completed.");
			} else {
				vscode.window.showInformationMessage("File not compiled : " + document.fileName);
			}
		}));
}

export function deactivate() {
	console.log("scss-compile disabled");
}
