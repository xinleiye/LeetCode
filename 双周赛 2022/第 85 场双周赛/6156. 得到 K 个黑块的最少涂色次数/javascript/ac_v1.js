/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
    let res = k;
    let left = 0;
    let right = 0;
    let bCount = 0;
    let wCount = 0;
    const length = blocks.length;
    
    while (right < k) {
        if (blocks[right] === "W") {
            wCount++;
        } else {
            bCount++;
        }
        right++;
    }
    res = Math.min(res, wCount);
    while (right < length) {
        if (blocks[right] === "W") {
            wCount++;
        } else {
            bCount++;
        }
        if (blocks[left] === "W") {
            wCount--;
        } else {
            bCount--;
        }
        right++;
        left++;
        res = Math.min(res, wCount);
    }
    
    return res;
};
