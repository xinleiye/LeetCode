/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function(hours) {
    let res = 0;
    const total = hours.length;
    const sum = new Array(hours.length + 1);
    const stack = [0];

    sum[0] = 0;
    for (let i = 1; i <= total; i++) {
        sum[i] = sum[i - 1] + (hours[i - 1] > 8 ? 1 : -1);
        if (sum[i] < sum[stack[stack.length - 1]]) {
            stack.push(i);
        }
    }
    for (let i = total; i > 0; i--) {
        while (stack.length > 0 && sum[i] > sum[stack[stack.length - 1]]) {
            res = Math.max(res, i - stack.pop());
        }
    }

    return res;
};
