/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    let res = 0;
    let index = 0;
    const length = s.length;

    while (index < length) {
        const chSet = new Set();
        
        while (index < length && !chSet.has(s[index])) {
            chSet.add(s[index]);
            index++;
        }
        res++;
    }

    return res;
};
