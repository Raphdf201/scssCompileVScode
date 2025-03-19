import * as vscode from 'vscode';
import { compileAndWrite } from "./compiler";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log("scss-compile enabled");

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const compileTest = vscode.commands.registerCommand("scss-compiler.compile-test", () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage("Compiling SCSS...");
		const workspaceFolders = vscode.workspace.workspaceFolders;
        if (workspaceFolders && workspaceFolders.length > 0) {
            const workspacePath = workspaceFolders[0].uri.fsPath + "/";
            compileAndWrite(workspacePath + "test.scss");
        } else {
            vscode.window.showInformationMessage("No workspace folder is open.");
        }
	});

	context.subscriptions.push(compileTest);
}

// This method is called when your extension is deactivated
export function deactivate() {
	console.log("scss-compile disabled");
}
