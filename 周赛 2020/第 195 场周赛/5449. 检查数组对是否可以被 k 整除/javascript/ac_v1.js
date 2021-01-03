/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function(arr, k) {
    let restArr;
    let restNumArr = new Array(k).fill(0);
    
    restArr = arr.map(item => {
        let rest = item % k;

        return rest < 0 ? k + rest : rest;
    });

    restArr.forEach(val => {
        restNumArr[val]++;
    });

    if (restNumArr[0] % 2) {
        return false;
    } else {
        let len;

        if (k % 2 === 0) {
            if (restNumArr[k / 2] % 2) {
                return false;
            }
            len = k / 2;
        } else {
            len = (k + 1) / 2;
        }
        for (let i = 1; i < len; i++) {
            if (restNumArr[i] !== restNumArr[k - i]) {
                return false;
            }
        }
    }

    return true;
};
