/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var findLexSmallestString = function(s, a, b) {
    let res = "";
    const strSet = new Set();
    const transformStr = (str) => {
        return str.substr(b) + str.substr(0, b);
    };
    const plusNum = (str, num) => {
        let ret = "";

        for (let i = 0; i < str.length; i++) {
            if (i % 2) {
                ret = ret + (parseInt(str[i], 10) + num) % 10;
            } else {
                ret += str[i];
            }
        }

        return ret;
    };
    const dfsSearch = (str) => {
        let tStr = transformStr(str);
        let pStr = plusNum(str, a);

        if (!strSet.has(tStr)) {
            strSet.add(tStr);
            if (tStr < res) {
                res = tStr;
            }
            dfsSearch(tStr);
        }
        if (!strSet.has(pStr)) {
            strSet.add(pStr);
            if (pStr < res) {
                res = pStr;
            }
            dfsSearch(pStr);
        }
    };

    for (let i = 0; i < s.length; i++) {
        res += "9";
    }
    dfsSearch(s);

    return res;
};
