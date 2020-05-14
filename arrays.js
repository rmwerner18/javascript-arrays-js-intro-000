
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(array, element) {return [element, ...array]};
function destructivelyAddElementToBeginningOfArray(element, array) {return array.unshift(element)};
function addElementToEndOfArray(array, element) {return [...array, element]};
function destructivelyAddElementToEndOfArray (element, array) {return array.push(element)};
function accessElementInArray (array, index) {return array[index]};
function destructivelyRemoveElementFromBeginningOfArray(array) {console.log(array.shift()); return array};
function removeElementFromBeginningOfArray(array) {return array.slice(1)};
function destructivelyRemoveElementFromEndOfArray(array) {console.log(array.pop()); return array};
function removeElementFromEndOfArray(array) {return array.slice(0, array.length - 1)};
