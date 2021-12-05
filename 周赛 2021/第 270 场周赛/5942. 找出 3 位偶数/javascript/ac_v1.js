/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
    const res = [];
    const total = digits.length;
    const numSet = new Set();

    digits.sort((val1, val2) => val1 - val2);
    for (let i = 0; i < total; i++) {
        if (digits[i] !== 0) {
            for (let j = 0; j < total; j++) {
                if (j !== i) {
                    for (let k = 0; k < total; k++) {
                        if (k !== i && k !== j && digits[k] % 2 === 0) {
                            const num = digits[i] * 100 + digits[j] * 10 + digits[k];

                            if (!numSet.has(num)) {
                                res.push(num);
                                numSet.add(num);
                            }
                        }
                    }
                }
            }
        }
    }

    return res;
};
