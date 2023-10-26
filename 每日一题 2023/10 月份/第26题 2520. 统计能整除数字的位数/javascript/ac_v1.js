/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let res = 0;
    let originNum = num;

    while (num) {
        const rest = num % 10;

        if (originNum % rest === 0) {
            res++;
        }
        num = (num - rest) / 10;
    }

    return res;
};
