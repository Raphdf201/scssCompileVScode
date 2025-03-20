import { workspace, window, TextDocument } from "vscode";
import { compileAndWrite } from "../compiler";

export function compileOnSave(document: TextDocument) {
    if (workspace.getConfiguration("scss-compiler").get<boolean>("compile-on-save")
        && (document.fileName.endsWith(".scss")
            || document.fileName.endsWith(".sass"))) {
        window.showInformationMessage("Compiling file : " + document.fileName);
        compileAndWrite(document.fileName);
        window.showInformationMessage("Compilation completed.");
    }
}
