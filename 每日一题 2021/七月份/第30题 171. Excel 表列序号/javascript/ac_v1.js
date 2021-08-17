/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let res = 0;
    const length = columnTitle.length;

    for (let i = 0; i < length; i++) {
        res = res * 26 + (columnTitle.charCodeAt(i) - 64);
    }

    return res;
};
