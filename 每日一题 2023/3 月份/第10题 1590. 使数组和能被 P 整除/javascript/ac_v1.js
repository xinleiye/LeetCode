/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
    let left = 0;
    let right = 0;
    let res = blocks.length;
    const total = blocks.length;
    let whiteNum = 0;

    while (right < k) {
        if (blocks[right] === "W") {
            whiteNum++;
        }
        right++;
    }
    res = whiteNum;
    if (res === 0) {
        return 0;
    }
    while (right < total) {
        if (blocks[right] === "W") {
            whiteNum++;
        }
        if (blocks[left] === "W") {
            whiteNum--;
        }
        res = Math.min(res, whiteNum);
        right++;
        left++;
    }

    return res;
};
