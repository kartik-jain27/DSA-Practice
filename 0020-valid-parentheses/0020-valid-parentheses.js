/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

    if (s.length % 2 !== 0) return false;

    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    let arr = [];

    for (let elem of s) {
        if (pairs[elem]) {
            let char = arr.pop()
            if (pairs[elem] != char) return false
        } else {
            arr.push(elem)
        }
    }
    return arr.length == 0
};