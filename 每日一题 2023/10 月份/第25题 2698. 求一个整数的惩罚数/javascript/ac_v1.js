/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function(n) {
    let res = 0;

    for (let i = 1; i <= n; i++) {
        if (check(parseNum(i * i), 0, 0, i)) {
            res += i * i;
        }
    }

    return res;
};
function parseNum(num) {
    const arr = [];

    while(num) {
        arr.unshift(num % 10);
        num = (num - arr[0]) / 10;
    }

    return arr;
}
function check(arr, pos, sum, target) {
    const total = arr.length
    if (pos === total) {
        return sum === target;
    }

    let num = 0;
    for (let i = pos; i < total; i++) {
        num = num * 10 + arr[i];
        if (sum + num > target) {
            return false;
        }
        if (check(arr, i + 1, sum + num, target)) {
            return true;
        }
    }

    return false;
}
