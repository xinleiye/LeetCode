/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function(fruits, baskets) {
    let res = 0;
    const total = fruits.length;
    const used = new Array(total).fill(false);

    for (const f of fruits) {
        let flag = false;

        for (let i = 0; i < total; i++) {
            if (!used[i] && baskets[i] >= f) {
                used[i] = true;
                flag = true;
                break;
            }
        }
        if (!flag) {
            res++;
        }
    }

    return res;
};
