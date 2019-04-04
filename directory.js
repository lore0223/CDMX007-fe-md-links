const fs   = require('fs');

// if (process.argv.length <= 2) {
//     console.log ("Uso:" + __filename + "ruta / a");
//     process.exit (-1);
// }
// var path = process.argv [2];

fs.readdir('./' ,( err , files) =>{  
    if(err){
        console.log(err);
    }
    else{
    console.log('Aquí tienes tus archivos:', files);    
    }
});

    




