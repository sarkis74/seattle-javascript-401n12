'use strict';

// const faker = require('faker');
// const greet = require('./greet');


// console.log(faker.random.number());
// console.log(faker.internet.userName());
// console.log(faker.internet.color());
// console.log(faker.lorem.words(10));
// console.log(faker.address.country());

const testArray = [1,2,3,4,5,6,7,8,9,10];

const warmUpFor = (array) => {
  for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};

const warmUpWhile= (array) => {
  let counter = 0;
  while(counter < array.length) {
    console.log(array[counter]);
    counter++;
  }
};

const warmUpMap = (array, callback) => {
  const newArray = [];
  for(let i =0; i < array.length; i++) {
    newArray[i] = callback(array[i]);
  }
  return newArray;
};

const warmUpFilter = (array, callback) => {
  const newArray = [];
  for(let i =0; i < array.length; i++) {
    if(callback(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

const warmUpReduce = (array, callback, accumulatorInitialValue) => {
  let accumulator = accumulatorInitialValue;

  for(let i =0; i < array.length; i++) {
      // Vinicio -           accumulator, currentValue, currentIndex
      accumulator = callback(accumulator, array[i],i);
  }

  return accumulator;
};

const testArrayReduced = warmUpReduce(testArray,(accumulator, currentValue) => {
  return accumulator + currentValue;
} ,0);

console.log(testArrayReduced);
