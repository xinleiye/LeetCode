/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    const total = words.length;
    const dp = new Array(total).fill(1);
    let res = 1;

    words.sort((w1, w2) => {
        return w1.length - w2.length;
    });
    for (let i = 1; i < total; i++) {
        let pre = i - 1;

        while (pre >= 0 && words[pre].length + 1 >= words[i].length) {
            if (check(words[pre], words[i])) {
                dp[i] = Math.max(dp[i], dp[pre] + 1);
            }
            pre--;
        }
        res = Math.max(res, dp[i]);
    }

    return res;
};

function check(word1, word2) {
    const len1 = word1.length;
    const len2 = word2.length;
    if (Math.abs(len1 - len2) !== 1) {
        return false;
    }

    let diff = 0;
    let index1 = 0;
    let index2 = 0;
    while (index1 < len1 || index2 < len2) {
        if (word1[index1] === word2[index2]) {
            index1++;
            index2++;
        } else {
            diff++;
            index2++;
        }
        if (diff > 1) {
            break;
        }
    }

    return diff === 1;
}
