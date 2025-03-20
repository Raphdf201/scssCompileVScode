import { workspace, window } from "vscode";
import { compileOnSave } from "./compileOnSave";

export const onSave = workspace.onDidSaveTextDocument((document) => {
    compileOnSave(document);
});
