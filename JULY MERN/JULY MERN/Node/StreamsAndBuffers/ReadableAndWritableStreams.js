var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt');
var writeStream = fs.createWriteStream(__dirname + '/written.txt');

// console.log(myReadStream);

myReadStream.on('data', (dataBlock)=>{
    console.log('Incoming data stream');
    console.log(dataBlock);
    writeStream.write(dataBlock);
})