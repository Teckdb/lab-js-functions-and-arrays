// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(arg1, arg2) {
    if (arg1 < arg2){
        return arg2
    } else {
        return arg1
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr1) {
    let longestWord = ""
    if (arr1.length === 0){
        return null
    }
    for (let i = 0; i < arr1.length; i++){
        if (arr1[i] !== arr1[i+1] ){
            if (arr1[i].length > longestWord.length){
                longestWord = arr1[i]
            }
        }
    }
    return longestWord
}



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {

    let numbersSum = 0
    arr.forEach(element => {
        numbersSum += element
    });
    return numbersSum 
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
const emptyArr = []
function averageNumbers(arr) {
    const emptyArr = []

    if (arr.length === 0){
        return 0
    }

    let numbersSum = 0
    arr.forEach(element => {
        numbersSum += element
    });
    numbersSum /= arr.length
    return numbersSum 
}

// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, arg) {

    if (arr.length === 0){
        return null
    }

    const check = arr.includes(arg)
    return check
}
