/**
 * @param {number} red
 * @param {number} blue
 * @return {number}
 */
var maxHeightOfTriangle = function(red, blue) {
    return Math.max(makeTriangle(red, blue), makeTriangle(blue, red));
};

function makeTriangle(odd, even) {
    let height = 0;
    let cur = 1;

    while (true) {
        if (cur % 2 === 1) {
            if (odd >= cur) {
                odd -= cur;
            } else {
                break;
            }
        } else {
            if (even >= cur) {
                even -= cur;
            } else {
                break;
            }
        }
        height++;
        cur++;
    }

    return height;
}
