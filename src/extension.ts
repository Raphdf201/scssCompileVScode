import * as vscode from "vscode";
import { compileAndWrite } from "./compiler";

export function activate(context: vscode.ExtensionContext) {
	console.log("scss-compile enabled");

	const compileAll = vscode.commands.registerCommand("scss-compiler.compile-all", async () => {
		vscode.window.showInformationMessage("Compiling all SCSS and SASS files...");

		const files = await vscode.workspace.findFiles("**/*.{scss,sass}");
		if (files.length === 0) {
			vscode.window.showInformationMessage("No SCSS or SASS files found in the workspace.");
			return;
		}

		files.forEach((file) => {
			const filePath = file.fsPath;
			console.log(`Compiling: ${filePath}`);
			compileAndWrite(filePath);
		});

		vscode.window.showInformationMessage("Compilation completed.");
	});

	const compileCurrent = vscode.commands.registerCommand("scss-compiler.compile-current-file", () => {
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

		compileAndWrite(filePath);
		vscode.window.showInformationMessage("Compilation completed.");
	});

	context.subscriptions.push(compileAll, compileCurrent);
}

export function deactivate() {
	console.log("scss-compile disabled");
}
