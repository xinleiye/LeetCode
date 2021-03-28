/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {
    const stack = [];
    const length = word.length;
    const numSet = new Set();
    let numFlag = true;

    for (let i = 0; i < length; i++) {
        if (!isNaN(word[i])) {
            if (numFlag && stack.length) {
                stack.push(stack.pop() * 10 + parseInt(word[i], 10));
            } else {
                numFlag = true;
                stack.push(parseInt(word[i], 10));
            }
        } else {
            numFlag = false;
        }
    }

    stack.forEach(num => {
        numSet.add(num);
    });
    
    return numSet.size;
};
