/**
 * @param {number} n
 * @return {number}
 */
var nextBeautifulNumber = function(n) {
    let res = n + 1;

    while (!isBalanceNumber(res)) {
        res++;
    }

    return res;
};

function isBalanceNumber(num) {
    const arr = new Array(10).fill(0);

    while (num) {
        const pos = num % 10;

        if (pos === 0) {
            return false;
        }
        arr[pos]++;
        num = (num - pos) / 10;
    }
    for (let i = 1; i < 10; i++) {
        if (arr[i] && arr[i] !== i) {
            return false;
        }
    }

    return true;
}
