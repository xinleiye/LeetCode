/**
 * @param {number[]} staple
 * @param {number[]} drinks
 * @param {number} x
 * @return {number}
 */
var breakfastNumber = function(staple, drinks, x) {
    let res = 0;
    let mod = 1e9 + 7;

    staple.sort((val1, val2) => {
        return val1 - val2;
    });
    drinks.sort((val1, val2) => {
        return val1 - val2;
    });

    for (let i = 0; i < staple.length; i++) {
        let diff = x - staple[i];

        if (diff <= 0) {
            break;
        }

        while (drinks[drinks.length - 1] > diff) {
            drinks.pop();
        }

        res = (res + drinks.length) % mod;
    }
    
    return res;
};
