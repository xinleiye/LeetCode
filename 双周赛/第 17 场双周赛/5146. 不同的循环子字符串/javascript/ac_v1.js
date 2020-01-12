/**
 * @param {string} text
 * @return {number}
 */
var distinctEchoSubstrings = function(text) {
    let subStrSet = new Set();

    for (let i = 0; i < text.length; i++) {
        for (let j = i + 1; j < text.length; j = j + 2) {
            let subStr = text.slice(i, j + 1);
            let subStrs = subStr.slice(0, subStr.length / 2);
            
            if (subStrs + subStrs === subStr) {
                if (!subStrSet.has(subStr)) {
                    subStrSet.add(subStr);
                }
            }

        }
    }

    return subStrSet.size;
};
