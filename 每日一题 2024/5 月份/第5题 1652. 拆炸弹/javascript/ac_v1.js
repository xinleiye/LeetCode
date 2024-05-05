/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    const total = code.length;
    if (k === 0) {
        return new Array(total).fill(0);
    }

    let left = k > 0 ? 1 : total + k;
    let right = k > 0 ? k : total - 1;
    let sum = 0;
    const res = new Array(total);
    for (let i = left; i <= right; i++) {
        sum += code[i];
    }
    for (let i = 0; i < total; i++) {
        res[i] = sum;
        sum -= code[left];
        left = (left + 1) % total;
        right = (right + 1) % total;
        sum += code[right];
    }

    return res;
};
