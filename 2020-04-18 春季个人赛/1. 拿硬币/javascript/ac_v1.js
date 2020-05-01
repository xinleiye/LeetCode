/**
 * @param {number[]} coins
 * @return {number}
 */
var minCount = function(coins) {
    let res = 0;

    coins.forEach(val => {
        res += Math.ceil(val / 2);
    });
    
    return res;
};
