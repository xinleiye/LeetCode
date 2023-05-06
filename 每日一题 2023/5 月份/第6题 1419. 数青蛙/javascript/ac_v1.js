/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
var minNumberOfFrogs = function(croakOfFrogs) {
    if (croakOfFrogs.length % 5) {
        return -1;
    }

    let res = 0;
    let frogNum = 0;
    const charIndexMap = {
        c: 0,
        r: 1,
        o: 2,
        a: 3,
        k: 4
    };
    const count = new Array(5).fill(0);
    for (const ch of croakOfFrogs) {
        const index = charIndexMap[ch];
        if (index === 0) {
            frogNum++;
            count[index]++;
            res = Math.max(res, frogNum);
        } else if (index < 4) {
            if (count[index - 1] === 0) {
                return -1;
            }
            count[index - 1]--;
            count[index]++;
        } else {
            frogNum--;
        }
    }
    if (frogNum > 0) {
        return -1;
    }

    return res;
};
