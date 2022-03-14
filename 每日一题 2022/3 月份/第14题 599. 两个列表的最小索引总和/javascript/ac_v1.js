/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let res = [];
    const l1Map = new Map();

    list1.forEach((n, index) => {
        l1Map.set(n, index);
    });

    let minSum = 2000;
    list2.forEach((n, index) => {
        let sum = 0;

        if (l1Map.has(n)) {
            sum = l1Map.get(n) + index;
            if (sum === minSum) {
                res.push(n);
            } else if (sum < minSum) {
                res = new Array(n);
                minSum = sum;
            }
        }
    });

    return res;
};
