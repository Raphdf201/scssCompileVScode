import * as commands from "./commands";
import * as listeners from "./listeners";
import { log } from "./utils";
import { ExtensionContext } from "vscode";

export function activate(context: ExtensionContext) {
	context.subscriptions.push(
		commands.compileAll,
		commands.compileCurrent,
		listeners.onSave);
}

export function deactivate() {
	log("SCSS Compiler disabled");
}
