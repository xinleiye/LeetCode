/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
var alertNames = function(keyName, keyTime) {
    let res = [];
    let timeMap = new Map();
    let str2Num = (str) => {
        str = str.split(":");

        return (+str[0]) * 100 + (+str[1]);
    };
    
    keyName.forEach((val, index) => {
        if (timeMap.has(val)) {
            timeMap.get(val).push(str2Num(keyTime[index]));
        } else {
            timeMap.set(val, [str2Num(keyTime[index])]);
        }
    });

    timeMap.forEach((val, key) => {
        if (val.length > 2) {
            val.sort((val1, val2) => {
                return val1 - val2;
            });
            for (let i = 0, len = val.length - 3; i <= len; i++) {
                if (val[i] < val[i + 2] && (val[i + 2] - val[i]) <= 100) {
                    res.push(key);
                    break;
                }
            }
        }
    });

    res.sort((val1, val2) => {
        return val1 > val2 ? 1 : -1
    });
    
    return res;
};
