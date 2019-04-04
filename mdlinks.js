
const getLinks = (data) => {
    const urlMatch = /(https?:\/\/[^\s]+)/g;
    const result   = data.match(urlMatch);
console.log(result);
};


module.exports.getLinks= getLinks;

