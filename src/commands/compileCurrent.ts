import { commands, window } from "vscode";
import { compileAndWrite } from "../compiler";

export const compileCurrent = commands.registerCommand("scss-compiler.compile-current-file", () => {
            const editor = window.activeTextEditor;
            if (!editor) {
                window.showInformationMessage("No active text editor found.");
                return;
            }

            const filePath = editor.document.fileName;
            if (!filePath.endsWith(".scss") && !filePath.endsWith(".sass")) {
                window.showInformationMessage("Current file is not a SCSS or SASS file.");
                return;
            }
            window.showInformationMessage("Compiling file : " + filePath);
            compileAndWrite(filePath);
            window.showInformationMessage("Compilation completed.");
        });
