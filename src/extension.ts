import * as vscode from "vscode";
import * as commands from "./commands/commands";
import * as listeners from "./listeners/listeners";

export function activate(context: vscode.ExtensionContext) {
	console.log("scss-compile enabled");

	context.subscriptions.push(
		commands.compileAll,
		commands.compileCurrent,
		commands.showSettings,
		listeners.onSave);
}

export function deactivate() {
	console.log("scss-compile disabled");
}
