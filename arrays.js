// Given an array of numbers, return all the numbers that are greater than ten.
// Ex.:
//   greaterThanTen([1, 2, 3, 11, 12, 13]);
//   => [11, 12, 13]
function greaterThanTen(numbers) 
{ let bigNum = [];
  for(let i = 0; i < numbers.length; i++){
   if(numbers[i] > 10){
    bigNum.push(numbers[i]);
   }
  }
return bigNum
}
// Given an array of strings, return all words that start with 'b' or 'B'.
// Ex.:
//   bWords(['banana', 'orange', 'apple', 'Bonobo', 'kiwi', 'pear']);
//   => ['banana', 'Bonobo]
function bWords(words){
  // let words = ['banana', 'orange', 'apple', 'Bonobo', 'kiwi', 'pear']
  let newWords = [];
  for(let i=0; i<words.length; i++){
    if(words[i].match(/b|B/)){
      newWords.push(words[i])
    }
  }
  return newWords
}
// console.log(bWords(['banana', 'orange', 'apple', 'Bonobo', 'kiwi', 'pear']))

// Add all the elements from additionalItems to the end of originalArray.
// Return the originalArray..
// Ex.:
//  extend([1, 2, 3], [4, 5, 6]);
//  => [1, 2, 3, 4, 5, 6]
function extend(originalArray, additionalItems) {
for(let i = 0; i < additionalItems.length; i++){
  originalArray.push(additionalItems[i])
}
return originalArray
}

// Return an array of all items with the given length.
// Ex.:
//   itemsWithLength(['a', 'bbb', 'cccc', 'dddddd', 'eee'], 3);
//   => ['bbb', 'eee']
function itemsWithLength(items, length) {
  let newArray = []
  for(let i= 0; i<items.length; i++){
  if(items[i].length === length){
  newArray.push(items[i])
  }
}
return newArray
}
// let items = ['a', 'bbb', 'cccc', 'dddddd', 'eee']
// console.log(items[1].length)
// console.log(itemsWithLength(['a', 'bbb', 'cccc', 'dddddd', 'eee'], 3))
// Return an array with every other element from the input array (start with index 0).
// Ex.:
//   everyOtherItem(['a', 'b', 'c', 'd', 'e']);
//   => ['a', 'c', 'e']
function everyOtherItem(items) {
  let newArray = []
  for(let i= 0; i< items.length; i+=2){
   newArray.push(items[i])
  }
  return newArray
}
// console.log(everyOtherItem(['a', 'b', 'c', 'd', 'e']))
// Given a list of words and a letter, return the indexes of the words that
// start with that letter. You can assume that the words and letter will always
// be lowercased.
// Ex.:
//   findWordsStartingWith(['apple', 'banana', 'kiwi', 'pear', 'bacon'], 'b');
//   => [1, 4]
function findWordsStartingWith(words, letter) {
  let newWords = []
  for(let i= 0; i<words.length; i++){
  if(words[i].startsWith(letter)){
    newWords.push([i])
  }
      
    }
    return newWords
  }

// Return the `n` smallest values in the array in descending order (largest
// numbers first). Assume that `n` will always be less than the length of the
// array.
// Ex.:
//   smallestNItems([1, 30, 4, 21, 100000], 3);
//   => [21, 4, 1]
function smallestNItems(items, n) {}

// Search for a value in the array and return its index. If the value appears
// more than once, return the index of the *FIRST* occurrence of the value. If
// the value doesn't exist in the array, return undefined.
// Ex.:
//   findIndex(['a', 'b', 'c', 'a', 'b', 'c'], 'c');
//   => 2
function findIndex(items, value) {}

// Given a start number and stop number, return a new array containing all the numbers
// between the start and stop number.
// Ex.:
//   range(1, 5);
//   => [1, 2, 3, 4, 5]
function range(start, stop) {}

export {
  bWords,
  everyOtherItem,
  extend,
  findIndex,
  findWordsStartingWith,
  greaterThanTen,
  itemsWithLength,
  range,
  smallestNItems,
}