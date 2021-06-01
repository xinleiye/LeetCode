/**
 * @param {string} n
 * @param {number} x
 * @return {string}
 */
var maxValue = function(n, x) {
    let index = 0;
    const length = n.length;
    
    if (n[0] === "-") {
        index = 1;
        while (index < length && n[index] <= x) {
            index++;
        }
    } else {
        while (index < length && n[index] >= x) {
            index++;
        }
    }
    
    return n.slice(0, index) + x + n.slice(index, length);
};
