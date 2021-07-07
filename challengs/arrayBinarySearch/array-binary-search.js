'use strict';

module.exports = function binarySearch(array=[], key=0){
  

  array.sort((a, b) => {
    return a > b ? 1: -1;
  });

  let middleItemIndex = Math.floor(array.length/2);


  let middleOne = function(start, final){
    middleItemIndex = Math.floor(((final - start)/2)+start);
  };

  let middleTwo = function(start, final){
    middleItemIndex = middleItemIndex+Math.floor((final - start)/2);
  };

  let start = 0;
  let final = array.length;

  while(key !== array[middleItemIndex]){

    console.log(key, middleItemIndex, array[middleItemIndex]);

    if(middleItemIndex===0 || middleItemIndex===array.length-1){

      return -1;

    } else if (key < array[middleItemIndex]){

      final = middleItemIndex;

      middleOne(start, final);

    } else if (key > array[middleItemIndex]){

      start = middleItemIndex;

      middleTwo(start, final);
    }
  }  
  return middleItemIndex;
};