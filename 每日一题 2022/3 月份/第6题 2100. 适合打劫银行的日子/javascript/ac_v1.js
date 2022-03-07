/**
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */
var goodDaysToRobBank = function(security, time) {
    if (security.length < time * 2 + 1) {
        return [];
    }

    const res = [];
    const total = security.length;
    let target = time;
    let start = 0;
    let end = time * 2;
    const isValid = (arr, left, mid, right) => {
        while (left < mid && arr[left] >= arr[left + 1]) {
            left++;
        }
        if (left === mid) {
            while (left < right && security[left] <= security[left + 1]) {
                left++;
            }
            if (left === right) {
                return -1;
            }
        }

        return left + 1;
    };

    while (end < total) {
        let flag = isValid(security, start, target, end);

        if (flag === -1) {
            res.push(target);
        }
        start++;
        target++;
        end++;
    }

    return res;
};
