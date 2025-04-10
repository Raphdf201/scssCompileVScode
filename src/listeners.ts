import { workspace } from "vscode";
import { compileOnSave } from "./listeners/compileOnSave";

export const onSave = workspace.onDidSaveTextDocument((document) => {
    compileOnSave(document);
});
