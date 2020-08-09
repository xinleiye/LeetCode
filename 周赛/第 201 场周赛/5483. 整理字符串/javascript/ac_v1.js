/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let res = "";
    let sDeleteFlag = new Array(s.length).fill(false);
    let deleted = true;

    while (deleted) {
        deleted = false;
        for (let i = 0, len = s.length - 1; i < len; i++) {
            let next = i + 1;

            if (sDeleteFlag[i]) {
                continue;
            }

            while (sDeleteFlag[next]) {
                next++;
            }

            if (Math.abs(s.charCodeAt(i) - s.charCodeAt(next)) === 32) {
                deleted = true;
                sDeleteFlag[i] = true;
                sDeleteFlag[next] = true;
            }
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (!sDeleteFlag[i]) {
            res += s[i];
        }
    }
    
    return res;
};
