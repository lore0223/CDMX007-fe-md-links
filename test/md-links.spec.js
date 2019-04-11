const read    = require('../read.js');
const mdlinks = require('../mdlinks');


describe ('readFile is a function',() => {
  it('readFile', () => {
    expect(typeof read.readFile).toBe('function');
  });
});

describe('readDir is a function', () =>{
  it('readDir ', () => {
    expect(typeof read.readDir).toBe('function');
  });
});

describe('getLinks is a function', () =>{
  it('getLinks ', ()=>{
    expect(typeof mdlinks.getLinks).toBe('function');
  });
});




// describe('mdLinks', () => {

//   it('should...', () => {
//     console.log('FIX ME!');
//   });

// });


