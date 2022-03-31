/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    const res = [];
    const isSelfDividingNumber = (num) => {
        let n = num;

        while (n > 0) {
            const d = n % 10;

            if (d !== 0) {
                if (num % d !== 0) {
                    return false;
                }
            } else {
                return false;
            }
            n = (n - d) / 10;
        }
        return true;
    };

    for (let i = left; i <= right; i++) {
        if (isSelfDividingNumber(i)) {
            res.push(i);
        }
    }

    return res;
};
