/**
 * @param {string} s
 * @return {number}
 */
var minimumSubstringsInPartition = function(s) {
    const total = s.length;
    const memo = new Array(total).fill(0);
    const dfsSearch = (index, str, memo) => {
        if (index < 0) {
            return 0;
        }
        if (memo[index] > 0) {
            return memo[index];
        }

        let res = Number.MAX_SAFE_INTEGER;
        const count = new Array(26).fill(0);
        let maxCount = 0;
        let chType = 0;
        for (let i = index; i >= 0; i--) {
            const pos = str.charCodeAt(i) - 97;
            if (count[pos] === 0) {
                chType++;
            }
            count[pos]++;
            maxCount = Math.max(maxCount, count[pos]);
            if (index - i + 1 === chType * maxCount) {
                res = Math.min(res, dfsSearch(i - 1, str, memo) + 1);
            }
        }
        memo[index] = res;

        return res;
    };

    return dfsSearch(total - 1, s, memo);
};