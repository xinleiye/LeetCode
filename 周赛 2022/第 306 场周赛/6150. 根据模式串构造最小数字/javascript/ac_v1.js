/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function(pattern) {
    const length = pattern.length;
    let res = 999999999;
    const numbers = new Array(length + 1).fill(false);
    const dfsSearch = (pre, num, len) => {
        if (len === length) {
            res = Math.min(res, num);
            return;
        }
        
        const cur = pattern[len];
        if (cur === "I") {
            for (let i = pre + 1; i <= length + 1; i++) {
                if (!numbers[i]) {
                    numbers[i] = true;
                    dfsSearch(i, num * 10 + i, len + 1);
                    numbers[i] = false;
                }
            }
        } else {
            for (let i = pre - 1; i > 0; i--) {
                if (!numbers[i]) {
                    numbers[i] = true;
                    dfsSearch(i, num * 10 + i, len + 1);
                    numbers[i] = false;
                }
            }
        }
    };

    for (let i = 1; i <= 9; i++) {
        numbers[i] = true;
        dfsSearch(i, i, 0);
        numbers[i] = false;
    }
    
    return String(res);
};
