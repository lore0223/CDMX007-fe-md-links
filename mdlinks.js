const fetch = require('node-fetch');
const read = require('./read');
const path = require('path')


const fetchData = async (url, pathFile, text) => {
  console.log("url:", url)
  const resultFetch = await fetch(url)
  .then(data => data)
  .catch(err => console.log("Esta no es una URL: ", url))
  
  if (resultFetch === undefined) return console.log("No obtuvimos respuesta")

  console.log(`${pathFile} - ${resultFetch.url} - ${resultFetch.statusText} - ${resultFetch.status} - ${text}`)
}


const getLinks = (pathFile, data, validate) => {
  const markdownRegex = /\[([^\[\]]+)\]\(([^)]+)/g;
  const result = data.match(markdownRegex);

  const linkRegex = /\(([^)]+)/ ;
  const textRegex = /\[([^\(([^)]+)/;

  result.forEach(element => {
    const link = element.match(linkRegex)
    const text = element.match(textRegex)

    if(validate) {
      fetchData(link[1], pathFile, text[1].slice(0,-1));
      
    } else {
      console.log(`${pathFile} - ${link[1]} - ${text[1].slice(0,-1)}`);
    }

  })
}



module.exports.getLinks = getLinks;
