/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let res = 0;

    for (const account of accounts) {
        let total = 0;

        for (const m of account) {
            total += m;
        }

        res = Math.max(res, total);
    }

    return res;
};
