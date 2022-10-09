/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */
var canTransform = function(start, end) {
    const length = start.length;
    let is = 0;
    let ie = 0;

    while (is < length && ie < length) {
        while (is < length && start[is] === "X") {
            is++;
        }
        while (ie < length && end[ie] === "X") {
            ie++;
        }
        if (is < length && ie < length) {
            if (start[is] !== end[ie]) {
                return false;
            }
            if ((start[is] === "L" && is < ie) || (start[is] === "R" && is > ie)) {
                return false;
            }
            is++;
            ie++;
        }
    }
    while (is < length) {
        if (start[is] !== "X") {
            return false;
        }
        is++;
    }
    while (ie < length) {
        if (end[ie] !== "X") {
            return false;
        }
        ie++;
    }

    return true;
};
