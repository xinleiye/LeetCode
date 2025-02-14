/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function(position, m) {
    position.sort((p1, p2) => p1 -p2);

    let left = 1;
    let right = position[position.length - 1] - position[0];
    let res = -1;
    while (left <= right) {
        const mid = (left + right) >>> 1;
        if (check(position, mid, m)) {
            res = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return res;
};

function check(position, dis, max) {
    let pre = position[0];
    let count = 1;

    for (const n of position) {
        if (n - pre >= dis) {
            count++;
            pre = n;
        }
    }

    return count >= max;
}
