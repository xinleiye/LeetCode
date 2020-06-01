/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let res = [];
    let maxCandy = 0;

    candies.forEach((val) => {
        maxCandy = Math.max(maxCandy, val);
    });
    
    candies.forEach((val) => {
        if ((val + extraCandies) >= maxCandy) {
            res.push(true);
        } else {
            res.push(false);
        }
    });

    return res;
};
