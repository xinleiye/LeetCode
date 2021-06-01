/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    const word2Num = (word) => {
        let num = 0;
        const length = word.length;

        for (let i = 0; i < length; i++) {
            num = num * 10 + word.charCodeAt(i) - 97;
        }
        
        return num;
    };
    
    return word2Num(firstWord) + word2Num(secondWord) === word2Num(targetWord);
};
