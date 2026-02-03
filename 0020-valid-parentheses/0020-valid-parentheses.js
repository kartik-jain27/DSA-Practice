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


    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        const match = pairs[char];

        if (match) {

            if (stack.pop() !== match) return false;
        } else {

            stack.push(char);
        }
    }

    return stack.length === 0;
};