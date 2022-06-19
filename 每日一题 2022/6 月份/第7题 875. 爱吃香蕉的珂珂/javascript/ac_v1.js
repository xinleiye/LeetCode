/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left = 1;
    let right = 1e9;

    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        let time = 0;

        for (const p of piles) {
            time += Math.ceil(p / mid);
        }
        if (time > h) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return right;
};
