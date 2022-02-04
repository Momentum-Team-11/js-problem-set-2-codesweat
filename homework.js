// 1. Create a function called "remove" that takes an array and a potential
// member of the array, and returns a new array with that member removed.
// For example, `remove(['Cadence', 'Ordel', 'Marion'], 'Marion')` results
// in `['Cadence', 'Ordel']`.
//
// If the potential member is not in the array, return the array unchanged.
// If the potential member is in the array, remove all instances of it from the array.

// This function takes two parameters: an array and a value
// to remove from the array

function remove(array, arrayValue) {
        console.log('Length of this array is ', array.length)
        let keepArray = []
        for (let index = 0; index < array.length; index++) 
        {
            if (array[index] !== arrayValue) {
            console.log( 'Keep ' +array[index])
            keepArray.push(array[index])
            console.log(index, 'index') 
        }
    }
    return keepArray
}
// Here we are asking JavaScript to run our function
// called remove. When the function runs, [1,2,3] as array
// and 1 as arrayValue. 
console.log (remove(['1', '2', '3'], '1'));

// When JavaScript runs the fuction array becomes 
// [1, 2, 3] and arrayValue becomes 1

// function remove([1,2,3], 1) {
//     {
        // here we are asking the function to output to the console
        // a string and the length of the array which is now
        // [1,2,3]
//         console.log('Length of this array is ' + [1, 2, 3].length)

        // here we are looping over [1,2,3] and using its length
        // to determine how many times the loop will run
//         for (let index = 0; index < [1, 2, 3].length; index++) {
    
                // here we are asking the function to output 
                // to the console the value of the array
                // according to the value's index position
//             console.log([1, 2, 3][index])
//         }
        // here we are returning the original array
        // that  was passed in as an argument when we
        // asked JavaScript to run the function
//     } return [1, 2, 3]
// }
//
// 2. Revisit your "remove" function. Make sure that it does not change the original
// array but instead returns a new array.



// 3. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.

// using reduce
function sum(array) {
    if (array.length > 0) {
      let result = array.reduce(function (acc, currentItem) {
        return acc + currentItem
      }, 0)
    }
    return result
  }
  
  // using a for loop
  function sum(numbers) {
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i]
    }
    return total
  }
  
  // using a for..of loop
  
  function sum(numbers) {
    let total = 0
    for (let num of numbers) {
      total += num
    }
    return total
  }
  
  // 4. Create a function called "average" that takes an array of numbers
  // and returns the average of those numbers.
  
  function average(array) {
    if (array.length > 0) {
      // you can use your sum function!
      return sum(array) / array.length
    }
  }
  
  // 5. Create a function called "minimum" that takes an array of numbers and
  // returns the smallest number in that array.
  function minimum(array) {
    let result = array[0]
    if (array.length > 0) {
      for (let i = 1; i < array.length; i++) {
        if (array[i] < result) {
          result = array[i]
        }
      }
    }
    return result
  }
  
  function minimum(numbers) {
    let smallestNum = numbers[0]
    if (numbers.length > 0) {
      for (let num of numbers) {
        if (num < smallestNum) {
          smallestNum = num
        }
      }
    }
    return smallestNum
  }
  
  function minimum(numbers) {
    if (numbers.length > 0) {
      return numbers.reduce((min, currentNum) =>
        currentNum < min ? currentNum : min
      )
    }
  }
  
  // 6. There are many techniques to sort arrays in programming. Your programming
  // language will likely include the ability to do this. We are going to
  // implement sorting ourselves, however.
  //
  // A "selection sort" is one of the most simple sorting algorithms. To implement it,
  // you start with an unsorted array of numbers. You search the array and find the
  // smallest number in the array. You then insert that into a new array as the first
  // element and remove it from the original array. You continue doing this until
  // there are no numbers left in the original array.
  //
  // Create a function called selectionSort that takes an array of numbers and returns
  // a sorted array using the above technique.
  //
  // Note 1: You do not actually want to delete things from the original array. You
  // should copy it first. To copy an array, use the following code:
  //
  // var arrayCopy = array.slice(0);
  //
  // Think about why this works.
  //
  // Note 2: Selection sort can be implemented using one array. Read the explanation at
  // https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
  // to see how. This may make more sense to you.
  
  function selectionSort(array) {
    // create a new array
    let sortedArray = []
  
    // copy the original so we don't delete things directly from it
    let arrayCopy = [...array]
  
    // loop over the array copy
    while (arrayCopy.length > 0) {
      // get the minimum value and add it to the result array
      // we'll save it in a variable so we can use it later to get its index
      let minNum = minimum(arrayCopy)
      sortedArray.push(minNum)
  
      // remove it from the first array
      // so that the while loop has a conditional that will eventually be false
      // we need its index to do that with splice
      var indexOfMinNum = arrayCopy.indexOf(minNum)
      arrayCopy.splice(indexOfMinNum, 1)
    }
    return sortedArray
  }
  
  // 7. Create a function called `textList` that takes an array and joins its elements
  // into a string separated by commas.
  //
  // For example, `textList(['Cadence', 'Ordel', 'Marion'])` results in the string
  // `"Cadence,Ordel,Marion"`.
  function textList(array) {
    if (array.length > 1) {
      array.join(', ')
    }
  
    return array
  }