/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    for (let i = 9; i >= 0; i--) {
        const tar = i.toString().repeat(3);

        if (num.indexOf(tar) >= 0) {
            return tar;
        }
    }

    return "";
};
