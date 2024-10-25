/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function(hours) {
    const total = hours.length;
    let res = 0;

    for (let i = 0; i < total; i++) {
        for (let j = i + 1; j < total; j++) {
            if ((hours[i] + hours[j]) % 24 === 0) {
                res++;
            }
        }
    }

    return res;
};
