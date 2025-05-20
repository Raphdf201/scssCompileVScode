# SCSS-compiler

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/raphdf201/scsscompilevscode/nodejs.yml)

A simple extension to compile sass or scss files to css in your project.

[my website](https://raphdf.ddns.net/javadocs/scsscompilevscode/index.html)
[extension github](https://github.com/Raphdf201/scssCompileVScode)

## Features

- Compile all the SCSS files of your project
- Compile the current file you are editing
- Compile on save
- Minify setting

## Extension Settings

This extension contributes the following settings:

- `scss-compiler.minify`: Enable/disable minifying(the output is all on a single line)
- `scss-compiler.compile-on-save`: Compile the current file on save
- `scss-compiler.compile-all-on-save`: Compile all the files on save instead of only the current one
- `scss-compiler.send-messages`: Show info messages when compiling files

## Changelog

### 0.0.1

Initial release.

Settings :

- minify
- compile on save

Commands :

- compile all
- compile current

### 0.0.2

Added settings :

- compile all on save
- send log messages

### 0.0.3

Update dependencies and add code documentation
