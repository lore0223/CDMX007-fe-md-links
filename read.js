const fs      = require('fs');
const mdlinks = require('./mdlinks');
const path    = require('path');


const readDir = () => {
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
   
    

        module.exports= readDir;
