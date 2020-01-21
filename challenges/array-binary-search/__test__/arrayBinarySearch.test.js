'use strict';

const binarySearch = require('../index.js');

describe('theBinarySearch', () => {

  it('the output should return (-1) if the find element > largest value in array', () => {
    let array = [1,3,4,5,6,9];

    let find = 5;

    let output = binarySearch(array, find);
    expect = -1;
    console.log('output: ', output);

    expect(output).toBe(expected);
  
});




  it('return -1 if the array empty', () => {



    let array = [];

    let find = 7;
    let output = binarySearch(array, find);

    expect = -1;
    
    // console.log('output: ', output);
    
    expect(output).toBe(expected);
  });







  it('it should return the search key if = midpoint value in the array', () => { //not the index



    let array = [1,3,4,5,6,9];
    
    let find = 5;
    let output = binarySearch(array, find);

    expect = 5;
    
    // console.log('output: ', output);
    
    expect(output).toBe(expected);
  });
});