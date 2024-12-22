/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function(lo, hi, k) {
    const nums = [];
    const memo = new Map();

    for (let i = lo; i <= hi; i++) {
        nums.push(i);
    }
    memo.set(1, 0);
    nums.sort((n1, n2) => {
        const w1 = calcWeight(n1, memo);
        const w2 = calcWeight(n2, memo);

        if (w1 !== w2) {
            return w1 - w2;
        } else {
            return n1 - n2;
        }
    });

    return nums[k - 1];
};

function calcWeight(num, memo) {
    if (memo.has(num)) {
        return memo.get(num);
    }
    if (num % 2 === 1) {
        return memo.set(num, calcWeight(num * 3 + 1, memo) + 1).get(num);
    } else {
        return memo.set(num, calcWeight(num / 2, memo) + 1).get(num);
    }
}
