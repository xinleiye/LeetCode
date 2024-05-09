/**
 * @param {number[]} plants
 * @param {number} capacityA
 * @param {number} capacityB
 * @return {number}
 */
var minimumRefill = function(plants, capacityA, capacityB) {
    let res = 0;
    let left = 0;
    let right = plants.length - 1;
    let curA = capacityA;
    let curB = capacityB;

    while (left < right) {
        if (curA >= plants[left]) {
            curA -= plants[left];
        } else {
            curA = capacityA - plants[left];
            res++;
        }
        if (curB >= plants[right]) {
            curB -= plants[right];
        } else {
            curB = capacityB - plants[right];
            res++;
        }
        left++;
        right--;
    }
    if (left === right) {
        if (curA > curB) {
            res += curA >= plants[left] ? 0 : 1;
        } else {
            res += curB >= plants[right] ? 0 : 1;
        }
    }

    return res;
};
