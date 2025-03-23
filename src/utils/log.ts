import { window, workspace } from "vscode";

export function log(message: string) {
    if (workspace.getConfiguration("scss-compiler").get<boolean>("send-messages")) {
        window.showInformationMessage(message);
    }
}