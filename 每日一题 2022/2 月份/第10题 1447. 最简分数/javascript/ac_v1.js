/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function(n) {
    let res = [];
    let getGcd = (num1, num2) => {
        let num;
        
        while (num2 > 0) {
            num = num1 % num2;
            num1 = num2;
            num2 = num;
        }

        return num1;
    };
    
    for (let denominator = 2; denominator <= n; ++denominator) {
        for (let numerator = 1; numerator < denominator; ++numerator) {
            if (getGcd(numerator, denominator) == 1) {
                res.push(numerator + "/" + denominator);
            }
        }
    }

    return res;
};
