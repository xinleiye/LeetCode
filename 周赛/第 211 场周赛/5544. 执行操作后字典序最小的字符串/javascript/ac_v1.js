/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var findLexSmallestString = function(s, a, b) {
    let res = "";
    let strSet = new Set();
    let translateStr = (str) => {
        return str.substr(b) + str.substr(0, b);
    };
    let plusStr = (str) => {
        let ret = "";

        for (let i = 0; i < str.length; i++) {
            if (i % 2) {
                ret = ret + (parseInt(str[i], 10) + a) % 10;
            } else {
                ret += str[i];
            }
        }

        return ret;
    };
    let getStr = (str) => {
        let tStr = translateStr(str);
        let pStr = plusStr(str);

        if (!strSet.has(tStr)) {
            strSet.add(tStr);
            if (tStr < res) {
                res = tStr;
            }
            getStr(tStr);
        }
        if (!strSet.has(pStr)) {
            strSet.add(pStr);
            if (pStr < res) {
                res = pStr;
            }
            getStr(pStr);
        }
    };

    for (let i = 0; i < s.length; i++) {
        res += "9";
    }

    getStr(s);

    return res;
};
