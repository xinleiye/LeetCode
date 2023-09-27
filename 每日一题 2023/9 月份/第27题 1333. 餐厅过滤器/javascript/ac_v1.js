/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */
var filterRestaurants = function(restaurants, veganFriendly, maxPrice, maxDistance) {
    const res = [];
    const target = restaurants.filter(item => {
        if (veganFriendly === 0) {
            return item[3] <= maxPrice && item[4] <= maxDistance;
        } else {
            return item[2] === veganFriendly && item[3] <= maxPrice && item[4] <= maxDistance;
        }
    });

    target.sort((t1, t2) => {
        if (t1[1] !== t2[1]) {
            return t2[1] - t1[1];
        } else {
            return t2[0] - t1[0];
        }
    });
    for (const item of target) {
        res.push(item[0]);
    }

    return res;
};
