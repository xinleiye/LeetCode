/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
    let postA = 0;
    for (const ch of s) {
        if (ch === "a") {
            postA++;
        }
    }

    let res = postA;
    let curB = 0;
    for (const ch of s) {
        if (ch === "a") {
            postA--;
        } else {
            curB++;
        }
        // 删除当前位置之前所有的 b 与当前位置之后所有的 a
        res = Math.min(res, postA + curB);
    }

    return res;
};
