/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function(n) {
    let res = 0;

    for (let i = 1; i <= n; i++) {
        if (check(i)) {
            res += i * i;
        }
    }

    return res;
};

function check(num) {
    let n = num * num;
    const numArr = [];
    let pow = 0;

    while (n) {
        numArr.unshift(n % 10);
        n = Math.floor(n / 10);
        pow++;
    }
    for (let i = Math.pow(2, pow) - 1; i >= 0; i--) {
        let j = i;
        let index = 0;
        let sum = 0;

        while (index < pow) {
            const pre = j & 1;
            let cur = 0;

            while ((index < pow) && ((j & 1) === pre)) {
                cur = cur * 10 + numArr[index];
                j = j >>> 1;
                index++;
            }
            sum += cur;
        }
        if (sum === num) {
            return true;
        }
    }

    return false;
}
