import * as commands from "./commands";
import * as listeners from "./listeners";
import { log } from "./utils";
import { ExtensionContext } from "vscode";

/**
 * Ran when the extension is activated
 */
export function activate(context: ExtensionContext) {
	log("SCSS Compiler enabled");
	log("Logging can be disabled by changing the scss-compiler.send-messages setting");
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
