const fs      = require('fs');
const mdlinks = require('./mdlinks');
const path    = require('path');


const readFile = (filepath, validate)=>{
console.log(filepath);
  fs.readFile(filepath, 'utf-8', (err,  data) => {
    
    if (err) return console.log(err);

    mdlinks.getLinks(filepath, data, validate);                                                     
  })
}

const readDir = (dir) => {
    fs.readdir('./', (err, files) => {
          if (err) {
            console.log(err);
          } else {
            files.forEach(element => {
              if (path.extname(element) === '.md') {               
                fs.readFile(element, 'utf-8', (err,  data) => {
                  if (err) {
                    console.log(err);
                  } else {
                  mdlinks.getLinks(data);                                                     
                  
                }
              })
            }
          })
           
        }
      })
    }
   
    

module.exports = {
  readDir, 
  readFile 
};