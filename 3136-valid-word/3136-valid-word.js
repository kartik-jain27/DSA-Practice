/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
    /**
 * @param {string} word
 * @return {boolean}
 */
    if (word.length < 3) return false;

    let hasVowel = false;
    let hasConsonant = false;
    
    const vowels = "aeiouAEIOU";

    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        const code = word.charCodeAt(i);

        const isDigit = code >= 48 && code <= 57; // 0-9
        const isUppercase = code >= 65 && code <= 90; // A-Z
        const isLowercase = code >= 97 && code <= 122; // a-z

        if (!isDigit && !isUppercase && !isLowercase) {
            return false;
        }
        if (isUppercase || isLowercase) {
            if (vowels.includes(char)) {
                hasVowel = true;
            } else {
                hasConsonant = true;
            }
        }
    }
    return hasVowel && hasConsonant;
};