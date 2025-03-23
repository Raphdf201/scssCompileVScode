import { commands, workspace, window } from "vscode";
import { compileAndWriteAll, log } from "../utils/utils";

export const compileAll = commands.registerCommand("scss-compiler.compile-all", async () => {
    log("Compiling all SCSS and SASS files...");

    const files = await workspace.findFiles("**/*.{scss,sass}");
    if (files.length === 0) {
        window.showInformationMessage("No SCSS or SASS files found in the workspace.");
        return;
    }

    compileAndWriteAll(files);

    log("Compilation completed.");
});
