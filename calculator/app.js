
const readlineSync = require('readline-sync');
const functions = require('./utils/functions.js');

module.exports = function(){
    console.log('Options\n');
    console.log('1. Check if number is even?');
    console.log('2. Check if number is odd?');
    console.log('3. Check if a number is armstrong?');

    let option = readlineSync.questionInt('Choose an option:') , num;

    switch(option){
        case 1:
            num = readlineSync.questionInt('\nEnter the number:');
            let isEven= functions.checkEvenOrOdd(num,'even');
            console.log(isEven?'The number is even':'The number is not even');
            break;
        case 2:
            num = readlineSync.questionInt('\nEnter the number:');
            let isOdd= functions.checkEvenOrOdd(num,'odd');
            console.log(isOdd?'The number is odd':'The number is not odd');
            break;
        case 3:
            num = readlineSync.questionInt('\nEnter the number:');
            let isArmstrong= functions.isArmstrong(num);
            console.log(isArmstrong?'The number is armstrong':'The number is not armstrong');
            break;
        default:
            console.log('Please select a valid option');
            break;
    }
};