/**
 * @param {number[][]} items
 * @param {number} k
 * @return {number}
 */
var findMaximumElegance = function(items, k) {
    items.sort((t1, t2) => t2[0] - t1[0]);

    const categorySet = new Set();
    let res = 0;
    let profit = 0;
    const stack = [];
    items.forEach(([p, c], index) => {
        if (index < k) {
            profit += p;
            if (!categorySet.has(c)) {
                categorySet.add(c);
            } else {
                stack.push(p);
            }
        } else if (stack.length > 0 && !categorySet.has(c)) {
            profit += p - stack.pop();
            categorySet.add(c);
        }
        res = Math.max(res, profit + categorySet.size * categorySet.size);
    });

    return res;
};
