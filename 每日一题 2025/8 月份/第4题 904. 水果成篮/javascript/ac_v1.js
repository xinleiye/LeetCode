/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let res = 0;
    const total = fruits.length;
    const basket = new Map();
    let left = 0;

    for (let i = 0; i < total; i++) {
        basket.set(fruits[i], (basket.get(fruits[i]) || 0) + 1);
        while (basket.size > 2) {
            const cur = fruits[left];
            const count = basket.get(cur);

            if (count > 1) {
                basket.set(cur, count - 1);
            } else {
                basket.delete(cur);
            }
            left++;
        }
        res = Math.max(res, i - left + 1);
    }

    return res;
};
