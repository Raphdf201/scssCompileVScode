import { commands, window, workspace } from "vscode";
import { compileAndWriteAll } from "../compiler";

export const compileAll = commands.registerCommand("scss-compiler.compile-all", async () => {
            window.showInformationMessage("Compiling all SCSS and SASS files...");

            const files = await workspace.findFiles("**/*.{scss,sass}");
            if (files.length === 0) {
                window.showInformationMessage("No SCSS or SASS files found in the workspace.");
                return;
            }

            compileAndWriteAll(files);

            window.showInformationMessage("Compilation completed.");
        });
