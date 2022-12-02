/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    const total = boxes.length;
    const res = new Array(total);
    let left = boxes[0] === "1" ? 1 : 0;
    let right = 0;
    let op = 0;

    for (let i = 1; i < total; i++) {
        if (boxes[i] === "1") {
            right++;
            op += i;
        }
    }
    res[0] = op;
    for (let i = 1; i < total; i++) {
        op = op + left - right;
        if (boxes[i] === "1") {
            left++;
            right--;
        }
        res[i] = op; 
    }

    return res;
};
