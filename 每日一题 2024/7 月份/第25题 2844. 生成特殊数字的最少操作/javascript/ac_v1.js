/**
 * @param {string} num
 * @return {number}
 */
var minimumOperations = function(num) {
    const total = num.length;
    let find0 = false;
    let find5 = false;

    for (let i = total - 1; i >= 0; i--) {
        if (num[i] === "0" || num[i] === "5") {
            if (find0) {
                return total - (i + 2);
            }
            if (num[i] === "0") {
                find0 = true;
            } else {
                find5 = true;
            }
        } else if (num[i] === "2" || num[i] === "7") {
            if (find5) {
                return total - (i + 2);
            }
        }
    }
    if (find0) {
        return total - 1;
    }

    return total;
};
