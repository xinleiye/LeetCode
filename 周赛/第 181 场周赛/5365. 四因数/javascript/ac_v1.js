/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
    let res = 0;
    let getNumFactor = (aNum) => {
        let factor = [];

        for (let i = 1, len = Math.floor(Math.sqrt(aNum)); i <= len; i++) {
            if (aNum % i === 0) {
                factor.push(i);
                if (i !== aNum / i) {
                    factor.push(aNum / i);
                }
            }
        }

        return factor;
    };

    nums.forEach((val) => {
        let factor = getNumFactor(val);

        if (factor.length === 4) {
            for (let i = 0; i < 4; i++) {
                res += factor[i];
            }
        }
    });

    return res;
};
