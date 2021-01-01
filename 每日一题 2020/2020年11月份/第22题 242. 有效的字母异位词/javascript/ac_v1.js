/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let res = true;
    let charMapS = new Map();
    let charMapT = new Map();
    let getCharMap = (map, str) => {
        for (let i = 0; i < str.length; i++) {
            if (map.has(str[i])) {
                map.set(str[i], map.get(str[i]) + 1);
            } else {
                map.set(str[i], 1);
            }
        }
    };

    getCharMap(charMapS, s);
    getCharMap(charMapT, t);

    if (charMapS.size !== charMapT.size) {
        return false
    }
    charMapS.forEach((val, key) => {
        if (res === true) {
            if (charMapT.has(key)) {
                if (val !== charMapT.get(key)) {
                    res = false;
                }
            } else {
                res = false;
            }
        }
    });

    return res;
};
