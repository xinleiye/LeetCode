/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let res = 0;
    const basket = new Map();
    let left = 0;
    const total = fruits.length;

    for (let i = 0; i < total; i++) {
        const cur = fruits[i];

        if (basket.has(cur)) {
            basket.set(cur, basket.get(cur) + 1);
        } else {
            while (basket.size >= 2) {
                const pre = fruits[left];
                const count = basket.get(pre);

                if (count === 1) {
                    basket.delete(pre);
                } else {
                    basket.set(pre, count - 1);
                }
                left++;
            }
            basket.set(cur, 1);
        }
        res = Math.max(res, i - left + 1);
    }

    return res;
};
