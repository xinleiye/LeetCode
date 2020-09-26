/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var paintingPlan = function(n, k) {
    let res = 0;
    let fn = getFactorial(n);
    
    if (k > 0 && k < n) {
        return 0;
    }
    if (k === n * n || k === 0) {
        return 1;
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if ((i + j) * n - i * j === k) {
                res += fn / (getFactorial(i) * getFactorial(n - i)) * fn / (getFactorial(j) * getFactorial(n - j));
                break;
            }
        }
    }

    return res;
};

function getFactorial (n) {
    let res = 1;

    if (n === 0) {
        return 1;
    }
    for (let i = 1; i <= n; i++) {
        res *= i;
    }
    
    return res;
}
