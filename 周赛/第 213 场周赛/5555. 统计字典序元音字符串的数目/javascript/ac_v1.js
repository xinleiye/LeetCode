/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
    let length = 1;
    let lenStack = [5, 4, 3, 2, 1];
    
    while (length < n) {
        let newLenStack = [];
        
        for (let i = 0; i < lenStack.length; i++) {
            for (let j = lenStack[i]; j >= 1; j--) {
                newLenStack.push(j);
            }
        }
        lenStack = newLenStack;
        length++;
    }
    
    return lenStack.length;
};
