import * as vscode from "vscode";
import { compileAndWriteAll } from "../compiler";

export const compileAll = vscode.commands.registerCommand("scss-compiler.compile-all", async () => {			// Compile all
            vscode.window.showInformationMessage("Compiling all SCSS and SASS files...");

            const files = await vscode.workspace.findFiles("**/*.{scss,sass}");
            if (files.length === 0) {
                vscode.window.showInformationMessage("No SCSS or SASS files found in the workspace.");
                return;
            }

            compileAndWriteAll(files);

            vscode.window.showInformationMessage("Compilation completed.");
        });