/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let res = 0;
    const consumerNum = accounts.length;
    const bankNum = accounts[0].length;

    for (let i = 0; i < consumerNum; i++) {
        let totalWealth = 0;

        for (let j = 0; j < bankNum; j++) {
            totalWealth += accounts[i][j];
        }

        res = Math.max(res, totalWealth);
    }

    return res;
};
