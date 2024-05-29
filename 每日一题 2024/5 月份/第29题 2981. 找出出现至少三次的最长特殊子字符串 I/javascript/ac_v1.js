/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function(s) {
    const subStr = new Map();
    let left = 0;
    let right = 0;
    const total = s.length;
    while(right < total) {
        while (s[right] === s[left]) {
            right++;
        }
        for (let i = right - 1; i >= left; i--) {
            const sub = s.substring(left, i + 1);

            subStr.set(sub, (subStr.get(sub) || 0) + right - i);
        }
        left = right;
    }

    let res = -1;
    subStr.forEach((num, str) => {
        if (num >= 3 && str.length > res) {
            res = str.length;
        }
    });

    return res;
};
