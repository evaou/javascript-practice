/**
 * @param {number} x
 * @return {number}
 */

var reverse = function(x) {
    let reversed = parseInt(Math.abs(x).toString().split('').reverse().join('')) * Math.sign(x);
    
    let maxNum = Math.pow(2, 31);
    if (reversed > maxNum - 1 || reversed < -maxNum) {
        return 0;
    }
    
    return reversed;
};

/*
var reverse = function(x) {
    let y = 0;
    
    while (x) {
        y = 10 * y + x % 10;
        x = parseInt(x / 10);
    }
    
    if (y > Math.pow(2, 31) - 1 || y <  -Math.pow(2, 31)) {
        y = 0;
    }
    
    return y;
};
*/

/*
var reverse = function(x) {
    let isNegative  = x < 0 ? true : false;
    
    if (isNegative) {
        x = -x;
    }
    
    let str = x.toString();
    let newStr = str.split("").reverse().join("");
    let newNum = Number(newStr);
    
    if (isNegative) {
        newNum = -newNum;
    }
    
    if (newNum > Math.pow(2, 31) - 1 || newNum < -Math.pow(2, 31)) {
        newNum = 0;
    }
    
    return newNum;
};
*/
