/**
 * @param {number[]} rains
 * @return {number[]}
 */
var avoidFlood = function(rains) {
    const total = rains.length;
    const shineDay = new Set();
    const res = new Array(total).fill(1);
    const full = new Map();

    for (let i = 0; i < total; i++) {
        if (rains[i] === 0) {
            shineDay.add(i);
        } else {
            res[i] = -1;
            if (full.has(rains[i])) {
                const index = binarySearch(shineDay, full.get(rains[i]));

                if (index === -1) {
                    return [];
                }
                res[index] = rains[i];
                shineDay.delete(index);
            }
            full.set(rains[i], i);
        }
    }

    return res;
};

function binarySearch(set, tar) {
    const arr = Array.from(set);
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const mid = (left + right) >>> 1;

        if (arr[mid] < tar) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return (left >= arr.length || arr[left] <= tar) ? -1 : arr[left];
}
