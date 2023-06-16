/**
 * @param {number} n
 * @param {number[][]} relations
 * @param {number} k
 * @return {number}
 */
var minNumberOfSemesters = function(n, relations, k) {
    const MASK = 1 << n;
    const need = new Array(MASK).fill(0);
    for (const [c1, c2] of relations) {
        need[1 << (c2 - 1)] |= 1 << (c1 - 1);
    }

    const dp = new Array(MASK).fill(Number.MAX_SAFE_INTEGER);
    dp[0] = 0;
    for (let i = 1; i < MASK; i++) {
        need[i] = need[i & (i - 1)] | need[i & (-i)];
        if ((need[i] | i) !== i) {
            continue;
        }

        const valid = i ^ need[i];
        if (count1(valid) <= k) {
            dp[i] = Math.min(dp[i], dp[i ^ valid] + 1);
        } else {
            let sub = valid;
            while (sub) {
                if (count1(sub) <= k) {
                    dp[i] = Math.min(dp[i], dp[i ^ sub] + 1);
                }
                sub = (sub - 1) & valid;
            }
        }
    }

    return dp[MASK - 1];
};

function count1(num) {
    let count = 0;

    while (num) {
        if (num & 1) {
            count++;
        }
        num = num >>> 1;
    }

    return count;
}
