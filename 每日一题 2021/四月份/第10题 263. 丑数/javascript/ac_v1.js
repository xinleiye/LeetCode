/**
 * @param {number} n
 * @return {boolean}
 */
 var isUgly = function(n) {
    let ugly = (num) => {
        if (num === 1) {
            return true;
        }
        return ((num % 2 === 0) && ugly(num / 2)) ||
            ((num % 3 === 0) && ugly(num / 3)) ||
            ((num % 5 === 0) && ugly(num / 5));
    };

    if (n === 0) {
        return false;
    }

    return ugly(n);
};
