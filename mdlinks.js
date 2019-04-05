const fetch = require('node-fetch');
const read = require('./read');

const getLinks = (data) => {
  const urlMatch = /(https?:\/\/[^\s]+)/g;
  const result = data.match(urlMatch);
  console.log(result);
//   result.forEach(element => {
//     fetch(element)
//           .then((res) => {
//             console.log(res.status, res.statusText);
//           })
//           .catch((err) => {
//             console.log(err);
//           })
  };

//   for (let i = 0; i < result.length; i++) {
//     fetch(result[i])
//       .then((res) => {
//         console.log(res.status, res.statusText);
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//   }


module.exports.getLinks = getLinks;
