"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileSCSS = compileSCSS;
exports.compileAndWrite = compileAndWrite;
const vscode = __importStar(require("vscode"));
const sass = require('sass');
/**
 * Compiles a scss or sass file to css using sass
 * @argument path the path to the scss or sass file to compile
 * @returns the compiled css
 */
function compileSCSS(path) {
    return sass.compile(path).css;
}
/**
 * Compiles a scss or sass file to css using sass and write the result to a file of the same name with a .css extension
 * @argument path the path to the scss or sass file to compile
 */
function compileAndWrite(path) {
    const css = compileSCSS(path);
    const cssPath = path.replace(/\.[^/.]+$/, ".css");
    vscode.workspace.fs.writeFile(vscode.Uri.file(cssPath), Buffer.from(css));
}
//# sourceMappingURL=compiler.js.map