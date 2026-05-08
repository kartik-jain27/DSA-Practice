/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let y = String(x);
    return y == y.split("").reverse().join("");
};