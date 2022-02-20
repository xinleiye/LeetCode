/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let res = 0;

    for (let i = 2; i <= num; i++) {
        let sum = 0;
        let tmp = i;

        while (tmp > 0) {
            sum += tmp % 10;
            tmp = Math.floor(tmp / 10);
        }
        if (sum % 2 === 0) {
            res++;
        }
    }

    return res;
};
