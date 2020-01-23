'use strict';

const shiftArray = require('./array-shift');

describe('testing module', () => {
    
      it('empty array and 0', () => {
        let expected = [0];
        let output = shiftArray.insertarraySift();
        expect(output).toEqual(expected);
      });
 
 
      it('requires array  first value', () => {

    let expected = null;

    let output = shiftArray.insertarraySift(4, 4);

    expect(output).toEqual(expected);
  });

  it('add second parameter in middle array', () => {

    let expected = [6,8,10,12,14];

    let output = shiftArray.insertarraySift([6,8,12,14], 10);

    expect(output).toEqual(expected);
  })
})