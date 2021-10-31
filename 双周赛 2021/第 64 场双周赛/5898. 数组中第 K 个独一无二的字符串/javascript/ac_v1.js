/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    const strMap = new Map();
    
    arr.forEach(str => {
        if (strMap.has(str)) {
            strMap.set(str, strMap.get(str) + 1);
        } else {
            strMap.set(str, 1);
        }
    });
    
    let index = 0;
    for (let str of arr) {
        if (strMap.get(str) === 1) {
            index++;
        }
        if (index === k) {
            return str;
        }
    }
    
    return '';
};
