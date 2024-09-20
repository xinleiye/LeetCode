/**
 * @param {number} n
 * @return {number}
 */
var countSpecialNumbers = function(n) {
    let res = 0;
    let count = 9;
    const numArr = parseNum(n);
    for (let i = 0; i < numArr.length - 1; i++) {
        res += count;
        count *= 9 - i;
    }

    const memo = new Map();
    res += gen(0, false, numArr, memo);

    return res;
};

function parseNum(n) {
    const arr = [];

    while (n) {
        arr.unshift(n % 10);
        n = Math.floor(n / 10);
    }

    return arr;
}

function gen(mask, isSmaller, numArr, memo) {
    if (countOneBits(mask) === numArr.length) {
        return 1;
    }

    const key = mask * 2 + (isSmaller ? 1 : 0);
    if (!memo.has(key)) {
        let count = 0;
        let upperBound = isSmaller ? 9 : numArr[countOneBits(mask)];
        for (let i = mask === 0 ? 1 : 0; i <= upperBound; i++) {
            if (((mask >> i) & 1) === 0) {
                count += gen(mask | (1 << i), isSmaller || i < upperBound, numArr, memo);
            }
        }
        memo.set(key, count);
    }

    return memo.get(key);
}

function countOneBits(num) {
    let count = 0;

    while(num) {
        count++;
        num &= num - 1;
    }

    return count;
}
