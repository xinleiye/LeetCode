/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let res = 0;

    for (const n of hours) {
        if (n >= target) {
            res++;
        }
    }

    return res;
};
