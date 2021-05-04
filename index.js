
const readlineSync = require('readline-sync');
const calculatorApp = require('./calculator/app.js');
const serverApp = require('./server/app.js');
const expressApp = require('./express-server/app.js');

console.log('What do you want to run?\n');
console.log('1. Calculator?');
console.log('2. Simple Server?');
console.log('3. Express Server');

let option = readlineSync.questionInt('Choose an option:') , num;

switch(option){
    case 1:    
        calculatorApp();
        break;
    case 2:
        serverApp();
        break;
    case 3:
        expressApp();
        break;
    default:
        console.log('Please select a valid option');
        break;
}