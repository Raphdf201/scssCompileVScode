import { commands, window, workspace } from "vscode";

export const showSettings = commands.registerCommand("scss-compiler.show-settings", () => {
            window.showInformationMessage("Minify : " + workspace.getConfiguration("scss-compiler").get<boolean>("minify"));
            window.showInformationMessage("Compile on save : " + workspace.getConfiguration("scss-compiler").get<boolean>("compile-on-save"));
        });
