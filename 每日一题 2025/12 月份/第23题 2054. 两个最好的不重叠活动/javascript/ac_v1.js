/**
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function(events) {
    let res = 0;
    const stack = [[0, 0]];

    events.sort((e1, e2) => e1[1] - e2[1]);
    for (const e of events) {
        const i = binarySearch(stack, e[0]);

        res = Math.max(res, stack[i][1] + e[2]);
        if (e[2] > stack[stack.length - 1][1]) {
            stack.push([e[1], e[2]]);
        }
    }

    return res;
};

function binarySearch(arr, target) {
    let left = -1;
    let right = arr.length;

    while (left + 1 < right) {
        const mid = (left + right) >>> 1;

        if (arr[mid][0] < target) {
            left = mid;
        } else {
            right = mid;
        }
    }

    return left;
}
