/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let y = String(x)
    let z = String(x).split('').reverse().join('')
    return y == z
};