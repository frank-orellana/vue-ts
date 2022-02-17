# VUE-TS
## Quick start commands:
|Command|Description|
|-|-|
|`npm run compile`|Compile|
|`npm run compile-watch`|Compile and watch for changes|
|`npm install`|Install dependencies (Execute after cloning)|

## Description
This project template let's you use vue, es6 and typescript for the browser *without* any additional dependencies like vue cli, webpack, browserify, babel or anything else, NONE!, just using javascript es6 modules.

For that same reason, this template will only work on some of the latest versions of all major browsers. If you wish to support most browsers, including the old IE, then you will need something like webpack.

## How to use
### New Project
If you wish to start a project from scratch, you can download this project, and start editing the included files:
1. public/index.html
2. src/index.ts

If you are just downloading the project, you will have tu run the command `npm install` which will install the following dependencies and leave the project ready to compile and run:
1. typescript
2. vue
3. tsc-watch (optional, used as tsc --watch, but it allows to run a command upon every change detected)

Then to compile you have two options to run in a console:
1. npm run compile:

  This command will execute typescript, and then it will execute the script `node utils/post-compile.js` which corrects the path for the vue library. The vue library is located in this template in the folder `public\js` but can be changed to any other path or even URL in the package.json file.
  You can now open index.html in a browser (either from the folder or add a server to this project or however you want).

2. npm run compile-watch:
  
  Same as compile, but it keeps compiling upon every change in ts files located inside the src folder, and runs the post-compile script every time. If you do not wish to use this command, you can remove the tsc-watch dependency and delete this script from package.json 

The reason we need a post-compile script to correct te path to vue, instead of just referencing it directly, is because it generates problems either in the editor not recognizing the types of vue, and hence, not giving correct highlighting, not validating correctly the syntax or even marking wrong some correct usages of vue. 
So instead, we point the ts files to the index.d.ts file that comes with the npm package of vue, which allows editors and the compiler to validate correctly our usage of vue, and then, when compiling the js, we replace that path for one that points to the location of our vue file.

Note that we are using the ESM.BROWSER version of vue, because it provides support for modules in the browser. but if you prefer, you could use the normal version, and include it in the html files (and edit the post-compile.js script to delete the import line instead of correcting the path)

### Existing project
If you have an existing project, you might start by adding the vue.esm.browser.js file in a location of your choice, in a folder accesible to the destination javascript files.
then add the property `config.vueRelativePath` to the package.json file, indicating this path.
Also make sure you hace the `compilerOptions.outDir` property in your tsconfig.json file.
in your ts files, add the import like this: `import Vue from '../node_modules/vue/types/index';`
if your path is different, change it too in the `config.vuePathToReplaceRegex` property of the package.json

Browser support:

| Browser      | Desktop | Mobile |
|--------------|---------|--------|
| Firefox      |   60+   |   60+  |
| Chrome       |   61+   |   61+  |
| Edge         |   16+   |   ?    |
| Safari       |   12+   |   ?    |
| IE           |   No    |   No   |

