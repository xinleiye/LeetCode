/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const total = ratings.length;
    if (total === 1) {
        return 1;
    }

    const count = new Array(total).fill(1);
    for (let i = 1; i < total; i++) {
        count[i] = ratings[i] > ratings[i - 1] ? count[i - 1] + 1 : 1
    }

    let res = count[total - 1];
    for (let i = total - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            count[i] = Math.max(count[i], count[i + 1] + 1);
        }
        res += count[i];
    }

    return res;
};
