import * as commands from "./commands";
import * as listeners from "./listeners";
import { log } from "./utils";
import { ExtensionContext } from "vscode";

/**
 * Ran when the extension is activated
 * @param context An extension context is a collection of utilities private to an extension.
 */
export function activate(context: ExtensionContext) {
	context.subscriptions.push(
		commands.compileAll,
		commands.compileCurrent,
		listeners.onSave);
}

/**
 * Ran when the extension is disabled
 */
export function deactivate() {
	log("SCSS Compiler disabled");
}
