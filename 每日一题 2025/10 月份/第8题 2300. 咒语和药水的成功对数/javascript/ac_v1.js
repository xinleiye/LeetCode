/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    potions.sort((p1, p2) => p1 - p2);

    const spellNum = spells.length;
    const potionNum = potions.length;
    const res = new Array(spellNum);
    for (let i = 0; i < spellNum; i++) {
        res[i] = potionNum - binarySearch(potions, spells[i], success);
    }

    return res;
};

function binarySearch(arr, num1, num2) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = (left + right) >>> 1;

        if (arr[mid] * num1 < num2) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
}
