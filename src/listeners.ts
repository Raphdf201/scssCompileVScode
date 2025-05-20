import { workspace } from "vscode";
import { compileOnSave } from "./listeners/compileOnSave";

/**
 * On save listener
 */
export const onSave = workspace.onDidSaveTextDocument((document) => {
    compileOnSave(document);
});
