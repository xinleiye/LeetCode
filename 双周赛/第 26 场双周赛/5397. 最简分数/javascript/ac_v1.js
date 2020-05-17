/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function(n) {
    let res = [];
    let fractionSet = new Set();
    let getGcd = (num1, num2) => {
        let num;
        
        while (num2 > 0) {
            num = num1 % num2;
            num1 = num2;
            num2 = num;
        }

        return num1;
    };
    
    for (let i = 1; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            let gcd = getGcd(i, j);
            let fraction = `${i / gcd}/${j / gcd}`;
            
            if (!fractionSet.has(fraction)) {
                res.push(fraction);
                fractionSet.add(fraction);
            };
        }
    }

    return res;
};
