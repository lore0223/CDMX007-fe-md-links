const fetch = require('node-fetch');
const read = require('./read');
const path = require('path');
const colors = require('colors');

const fetchData = async (url, pathFile, text) => {
  //console.log("url:", url)
  const resultFetch = await fetch(url)
    .then(data => data)
    .then(result => result.status)
    .catch(err =>err)

      console.log("Esta no es una URL: ", url, err.status)

  if (resultFetch === undefined) return console.log("No obtuvimos respuesta")
  console.log(resultFetch)
  console.log(`${pathFile.yellow} - ${resultFetch.url.blue} - ${resultFetch.statusText.green} - ${resultFetch.status} - ${text}`)
}


const getLinks = (pathFile, data, options) => {
  const markdownRegex = /\[([^\[\]]+)\]\(([^)]+)/g;
  
  const result = data.match(markdownRegex);

  //console.log('sin texto :',result[6].split(('](')||('] ('))[0].slice(1));
  //console.log('sin texto :',result[6].split(('](')||('] ('))[1]);

  const linkRegex = /\(([^)]+)/; //agarra unicamente el link 
  const textRegex = /\[([^\(([^)]+)/; //obtiene el texto 
  if (options === 'stats') {
      getStats(result)
  }
  
  result.forEach(element => {
    const link = element.match(linkRegex);
    const text = element.match(textRegex);
    // const arrlink= element.split(('](')||('] ('));
    const sliceText = text[1].slice(0, -1);

    if (options === 'validate') {
      // fetchData(arrlink[1], pathFile, arrlink[0].slice(1))
      fetchData(link[1,pathFile,sliceText])
      }
    else {
      return console.log(`${pathFile.yellow} - ${link[1].blue} - ${ sliceText}`);
    }

  })
  
}


const getStats = (result) => {
  let totalLinks = result.length;
  let uniqueLinks = 0;
  let duplicatedLinks = 0;
  for (let i = 0; i < result.length; i++) {
    for (let j = i+1; j < result.length; j++) {
      if (result[i] === result[j]) {
        console.log(result[i], result[j])
        duplicatedLinks++;
      }
    }
  }
  console.log(duplicatedLinks)
  uniqueLinks = totalLinks - duplicatedLinks;
  return console.log(`
             Total de Links:${totalLinks} 
             Links únicos: ${uniqueLinks}
             Links duplicados: ${duplicatedLinks}`)
}

const validateStates = (url,statusText) => {
 const okLinks      = 0;
 const brokenLinks  = 0;
// if(){

// }

}

module.exports = {
  getLinks,
  getStats,
  getStats
};
