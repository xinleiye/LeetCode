/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function(ranks, cars) {
    let left = 0;
    let right = _.min(ranks) * Math.pow(cars, 2);

    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        let repaired = 0;

        for (const r of ranks) {
            repaired += Math.floor(Math.sqrt(mid / r));
        }
        if (repaired >= cars) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return right;
};
