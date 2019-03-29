
const fs = require('fs');

const readFile = (file) => {
    fs.readFile(file,'utf-8', (err, data) => {
  if (err){
    console.log(err);
  }
  console.log(data);
});
}
exports.readFile = readFile;
