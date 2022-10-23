/**
 * @param {number} num
 * @return {boolean}
 */
var sumOfNumberAndReverse = function(num) {
    const reverse = (num) => {
        let res = 0;

        while (num) {
            res = res * 10 + num % 10;
            num = Math.floor(num / 10);
        }

        return res;
    };

    for (let i = 0; i <= num; i++) {
        if (i + reverse(i) === num) {
            return true;
        }
    }

    return false;
};
