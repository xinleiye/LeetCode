/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    const res = [];
    const potionsCount = potions.length;
    const binarySearch = (arr, target) => {
        let left = 0;
        let right = arr.length - 1;

        while (left < right) {
            const mid = left + Math.floor((right - left) / 2);

            if (arr[mid] >= target) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        
        return left;
    };

    potions.sort((p1, p2) => p1 - p2);
    for (const s of spells) {
        const index = binarySearch(potions, Math.ceil(success / s));

        if (potions[index] * s >= success) {
            res.push(potionsCount - index);
        } else {
            res.push(0);
        }
    }
    
    return res;
};
