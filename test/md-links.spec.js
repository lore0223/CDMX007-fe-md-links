const mdLinks = require('../');


describe('mdLinks', () => {

  it('should...', () => {
    console.log('FIX ME!');
  });

});


const readJs = require ('../read.js');

describe('read', () =>{

  it('should be a function', () =>{
    expect(typeof window.readFile).toBe('function');
  })

});

// describe('pokesaurius', () => {

//   it('is an object', () => {
//       expect(typeof window.pokesaurius).toBe('object');
//   })
// },

//   describe('typeFilter', () => {
//     it('is a function', () => {
//       expect(typeof window.pokesaurius.typeFilter).toBe('function');
//     })
