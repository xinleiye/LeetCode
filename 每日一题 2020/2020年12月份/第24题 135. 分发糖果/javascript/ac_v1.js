/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let res;
    const length = ratings.length;
    let buff = new Array(length);

    if (ratings.length === 1) {
        return 1;
    }

    buff[0] = 1;
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            buff[i] = buff[i - 1] + 1;
        } else {
            buff[i] = 1;
        }
    }

    buff[length - 1] = Math.max(buff[length - 1], 1);
    res = buff[length - 1];
    for (let i = length - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            buff[i] = Math.max(buff[i + 1] + 1, buff[i]);
        }
        res += buff[i];
    }

    return res;
};
