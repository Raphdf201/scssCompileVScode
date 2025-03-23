import { workspace, window, TextDocument } from "vscode";
import { compileAndWrite, compileAndWriteAll, log } from "../utils/utils";

export async function compileOnSave(document: TextDocument) {
    const canCompile = workspace.getConfiguration("scss-compiler").get<boolean>("compile-on-save")
        && (document.fileName.endsWith(".scss")
            || document.fileName.endsWith(".sass"));
    if (canCompile && workspace.getConfiguration("scss-compiler").get<boolean>("compile-all-on-save")) {
        log("Compiling all SCSS and SASS files...");
        const files = await workspace.findFiles("**/*.{scss,sass}");
        if (files.length === 0) {
            window.showInformationMessage("No SCSS or SASS files found in the workspace.");
            return;
        }
        compileAndWriteAll(files);
        log("Compilation completed.");
    } else if (canCompile) {
        log("Compiling file : " + document.fileName);
        compileAndWrite(document.fileName);
        log("Compilation completed.");
    } else {
        log("Did not compile any file")
    }
}
