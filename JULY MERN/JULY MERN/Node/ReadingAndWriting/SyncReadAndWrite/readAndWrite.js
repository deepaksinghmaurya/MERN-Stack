const fileSystem = require('fs');

let count = 2;
let readme = fileSystem.readFileSync('readme.txt');
console.log(readme);
let fileName = `written${count}.txt`;

console.log('Finished Reading the file time to write!!')

fileSystem.writeFileSync(fileName, 'readme');