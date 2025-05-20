import { window, workspace } from "vscode";

/**
 * Shows an information box in the bottom right corner of the screen
 * @param message the message to display
 */
export function log(message: string) {
    if (workspace.getConfiguration("scss-compiler").get<boolean>("send-messages")) {
        window.showInformationMessage(message);
    }
}