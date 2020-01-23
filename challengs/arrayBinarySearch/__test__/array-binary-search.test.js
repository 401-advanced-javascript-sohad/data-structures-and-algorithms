'use strict';

const binarySearch = require('../array-binary-search');

describe('binary search', () => {

  it(' arr [] and key= 0', () => {
    let expected = -1;
    let result = binarySearch();
    expect(result).toEqual(expected);
  });

  //happy path
  it('searches in array and returns the index value of the key', () => {
    let expected = 7;
    let result = binarySearch([2,5,8,4,9,6,3,10,15], 10);
    expect(result).toEqual(expected);
  });

  it('returns -1 if the key is not in the array', () => {
    let expected = -1;
    let result = binarySearch([5,19,32,18,49,57,58], 1);
    expect(result).toEqual(expected);
  });
});