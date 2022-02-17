const fs = require('fs');
const path = require('path');
const package = require('../package');

// configured in package.json, can be local or url like: 'https://cdn.jsdelivr.net/npm/vue@2.6.0-beta.1/dist/vue.esm.browser.js'
const vuePath = package.config.vueRelativePath;

//Goes though all the files in the public/js folder and replaces the path
lsFolderRecursive('./public/js').forEach(file => {
  fixVueModuleForES6(file);
});

function lsFolderRecursive(pPath, cb) {
  const resultFiles = [];
  if (fs.existsSync(pPath)) {
    fs.readdirSync(pPath).forEach(file => {
      const curPath = path.join(pPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        resultFiles.concat(lsFolderRecursive(curPath));
      } else {
        if (cb) cb(curPath);
        resultFiles.push(curPath);
      }
    });
  } else console.error(`path ${pPath} does not exist`);
  return resultFiles;
};

function fixVueModuleForES6(path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) return console.log(err);

    var result = data.replace(/\.\.\/node_modules\/vue\/types\/index/i, vuePath);

    fs.writeFile(path, result, 'utf8', err => {
      if (err) return console.log(err);
      return console.log('fixed vue import in ' + path);
    });
  });
}
