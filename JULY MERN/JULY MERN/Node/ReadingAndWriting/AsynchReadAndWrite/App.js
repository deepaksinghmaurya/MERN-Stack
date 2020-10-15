const fs = require('fs');

const readme = fs.readFile('readme.txt', 'utf8', function(error, data){
    console.log('I am writing the file now');
    fs.writeFile(`writeText.txt`, data, function(error){
        if(error) throw error;
        else console.log('written the file');
    });
});


console.log(readme);


console.log('*******************Async Reading***********************');