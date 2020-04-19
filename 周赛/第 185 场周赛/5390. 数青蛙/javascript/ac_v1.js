/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
var minNumberOfFrogs = function(croakOfFrogs) {
    let res = 0;
    let croakInfo = new Map();
    let croak = ["c", "r", "o", "a", "k"];

    for (let i = 0, len = croakOfFrogs.length; i < len; i++) {
        let pre = Infinity;
        let aCroak = croakOfFrogs[i];
        let croakIndex = croak.indexOf(aCroak);

        for (let j = 0; j < croakIndex; j++) {
            if (!croakInfo.has(croak[j])) {
                return -1;
            }
            if (croakInfo.get(croak[j]) > pre) {
                return -1;
            } else {
                pre = croakInfo.get(croak[j]) ;
            }
        }

        if (croakInfo.has(aCroak)) {
            croakInfo.set(aCroak, croakInfo.get(aCroak) + 1);
        } else {
            croakInfo.set(aCroak, 1);
        }
        if (croakInfo.size === 5) {
            croak.forEach(item => {
                let num = croakInfo.get(item);
                
                if (num === 1) {
                    croakInfo.delete(item);
                } else {
                    croakInfo.set(item, num - 1);
                }
            });
        } else {
            croakInfo.forEach(val => {
                res = Math.max(res, val);
            });
        }
    }

    return croakInfo.size > 0 ? -1 : res;
};
