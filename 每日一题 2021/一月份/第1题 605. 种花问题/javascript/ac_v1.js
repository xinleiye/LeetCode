/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    const length = flowerbed.length;
    let prev = -1;
    let count = 0;

    for (let i = 0; i < length; i++) {
        if (flowerbed[i] === 1) {
            if (prev >= 0) {
                count += (i - prev - 2) >>> 1;
            } else {
                count += i >>> 1;
            }
            if (count >= n) {
                return true;
            }
            prev = i;
        }
    }

    if (prev >= 0) {
        count += (length - prev - 1) >>> 1;
    } else {
        count += (length + 1) >>> 1;
    }

    return count >= n;
};
