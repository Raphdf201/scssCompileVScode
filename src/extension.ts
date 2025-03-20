import * as vscode from "vscode";
import * as commands from "./commands/commands";
import * as listeners from "./listeners/listeners";

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		commands.compileAll,
		commands.compileCurrent,
		listeners.onSave);
}

export function deactivate() {
}
