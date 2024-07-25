// Code Wars
// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

function findAverage(array) {
  if(array.length == 0) {
    return 0
  }
  
  var sum = 0
  
  for(let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  
  return sum / array.length
}


// function findAverage(array) {
//   return array.length == 0 ? 0 : array.reduce((total, v)=> total + v) / array.length
// }
