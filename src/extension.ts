import { compileAndWrite, compileAndWriteAll, log } from "./utils";
import {
  commands,
  ExtensionContext,
  window,
  workspace,
} from "vscode";

/**
 * Ran when the extension is activated
 */
export function activate(context: ExtensionContext) {
  log("SCSS Compiler enabled");
  log(
    "Logging can be disabled by changing the scss-compiler.send-messages setting",
  );
  context.subscriptions.push(compileAll, compileCurrent, onSaveListener);
}

/**
 * Ran when the extension is disabled
 */
export function deactivate() {
  log("SCSS Compiler disabled");
}

/**
 * Compile the file that is currently being edited by the user
 */
const compileCurrent = commands.registerCommand(
  "scss-compiler.compile-current-file",
  () => {
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
    log("Compiling file : " + filePath);
    compileAndWrite(filePath);
    log("Compilation completed.");
  },
);

/**
 * Compile all of the scss files in the workspace
 */
const compileAll = commands.registerCommand(
  "scss-compiler.compile-all",
  async () => {
    log("Compiling all SCSS and SASS files...");

    const files = await workspace.findFiles("**/*.{scss,sass}");
    if (files.length === 0) {
      window.showInformationMessage(
        "No SCSS or SASS files found in the workspace.",
      );
      return;
    }

    compileAndWriteAll(files);

    log("Compilation completed.");
  },
);

/**
 * On save listener
 */
const onSaveListener = workspace.onDidSaveTextDocument(async (document) => {
  const canCompile =
    workspace
      .getConfiguration("scss-compiler")
      .get<boolean>("compile-on-save") &&
    (document.fileName.endsWith(".scss") ||
      document.fileName.endsWith(".sass"));
  if (
    canCompile &&
    workspace
      .getConfiguration("scss-compiler")
      .get<boolean>("compile-all-on-save")
  ) {
    log("Compiling all SCSS and SASS files...");
    const files = await workspace.findFiles("**/*.{scss,sass}");
    if (files.length === 0) {
      window.showInformationMessage(
        "No SCSS or SASS files found in the workspace.",
      );
      return;
    }
    compileAndWriteAll(files);
    log("Compilation completed.");
  } else if (canCompile) {
    log("Compiling file : " + document.fileName);
    compileAndWrite(document.fileName);
    log("Compilation completed.");
  } else {
    log("Did not compile any file");
  }
});
