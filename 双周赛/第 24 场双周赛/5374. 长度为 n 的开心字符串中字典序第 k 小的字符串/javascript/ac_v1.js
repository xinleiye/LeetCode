/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function(n, k) {
    let allHappyStr = ["a", "b", "c"];
    let chars = ["a", "b", "c"];

    if (k > 3 * Math.pow(2, n - 1)) {
        return "";
    }

    for (let i = 1; i < n; i++) {
        let strs = [];

        for (let j = 0, len = allHappyStr.length; j < len; j++) {
            let str = allHappyStr[j];

            for (let k = 0; k < 3; k++) {
                if (chars[k] !== str[str.length - 1]) {
                    strs.push(str + chars[k]);
                }
            }
        }

        allHappyStr = strs;
    }
    
    return allHappyStr[k - 1];
};
