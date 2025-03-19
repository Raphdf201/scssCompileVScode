import * as vscode from "vscode";
import { compileAndWrite } from "./compiler";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
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
			compileAndWrite(filePath);
		});

		vscode.window.showInformationMessage("Compilation completed.");
	});

	context.subscriptions.push(compileAll);
}

// This method is called when your extension is deactivated
export function deactivate() {
	console.log("scss-compile disabled");
}
