/**
 * @param {string} s
 * @return {number}
 */
var minimumCost = function(s) {
    const total = s.length;
    const pre = new Array(total).fill(0).map(() => new Array(2).fill(0));
    pre[0][0] = s[0] === "0" ? 0 : 1;
    pre[0][1] = s[0] === "1" ? 0 : 1;
    for (let i = 1; i < total; i++) {
        if (s[i] === "0") {
            pre[i][0] = Math.min(pre[i - 1][0], pre[i - 1][1] + i);
            pre[i][1] = pre[i - 1][0] + i + 1;
        } else {
            pre[i][0] = pre[i - 1][1] + i + 1;
            pre[i][1] = Math.min(pre[i - 1][1], pre[i - 1][0] + i);
        }
    }

    const post = new Array(total).fill(0).map(() => new Array(2).fill(0));
    post[total - 1][0] = s[total - 1] === "0" ? 0 : 1;
    post[total - 1][1] = s[total - 1] === "1" ? 0 : 1;
    for (let i = total - 2; i >= 0; i--) {
        if (s[i] === "0") {
            post[i][0] = Math.min(post[i + 1][0], post[i + 1][1] + total - i - 1);
            post[i][1] = post[i + 1][0] + total - i;
        } else {
            post[i][0] = post[i + 1][1] + total - i;
            post[i][1] = Math.min(post[i + 1][1], post[i + 1][0] + total - i - 1);
        }
    }

    let res = Math.min(pre[total - 1][0], pre[total - 1][1], post[0][0], post[0][1]);
    for (let i = 1; i < total - 1; i++) {
        res = Math.min(res, pre[i][0] + post[i + 1][0], pre[i][1] + post[i + 1][1]);
    }

    return res;
};
