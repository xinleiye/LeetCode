/**
 * @param {string} s
 * @return {boolean}
 */
 var splitString = function(s) {
    let res = false;
    const length = s.length;
    const dfs = (preNum, preIndex) => {
        if (res) {
            return;
        }
        if (preIndex === length) {
            res = true;
            return;
        }
        for (let i = preIndex; i < length; i++) {
            const currentNum = Number(s.slice(preIndex, i + 1));

            if (currentNum < preNum) {
                if (preNum - currentNum === 1) {
                    dfs(currentNum, i + 1);
                }
            } else {
                break;
            }
        }
    };

    for (let i = 1; i < length; i++) {
        dfs(Number(s.slice(0, i)), i);
        if (res) {
            return true;
        }
    }

    return false;
};
