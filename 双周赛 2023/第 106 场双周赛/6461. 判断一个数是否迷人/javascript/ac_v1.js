/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function(n) {
    const numCount = new Array(10).fill(0);
    
    parseNum(numCount, n);
    parseNum(numCount, n * 2);
    parseNum(numCount, n * 3);
    if (numCount[0]) {
        return false;
    }
    for (let i = 1; i < 10; i++) {
        if (numCount[i] !== 1) {
            return false;
        }
    }
    
    return true;
};

function parseNum(arr, num) {
    while (num) {
        arr[num % 10]++;
        num = Math.floor(num / 10);
    }
}
