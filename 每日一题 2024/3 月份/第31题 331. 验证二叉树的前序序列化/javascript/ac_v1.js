/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    const order = preorder.split(",");
    const length = order.length;
    let index = 0;
    let slot = 1;

    while (index < length) {
        if (slot === 0) {
            return false;
        }
        if (order[index] === "#") {
            slot--;
        } else {
            slot++; // slot - 1 + 2
        }
        index++;
    }

    return slot === 0;
};
