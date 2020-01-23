'use strict';

let arraySift = module.exports = {};

arraySift.insertarraySift = function(arr=[], val=0){

  if(!Array.isArray(arr)){return null;}

  let arrayNew = [];

  let centerIdx = Math.ceil(arr.length/2);
  
  for(let i = 0; i < centerIdx; i++){
    arrayNew[i] = arr[i];
  }

  arrayNew[centerIdx] = val;

  for(let i = centerIdx + 1; i <= arr.length; i++){
    arrayNew[i] = arr[i - 1];
  }
  console.log(arrayNew, arr);
  return arrayNew;
};