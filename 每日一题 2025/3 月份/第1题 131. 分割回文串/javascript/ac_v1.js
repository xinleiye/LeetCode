/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const res = [];
    const partOnce = [];
    const length = s.length;
    const buff = new Array(length);
    const isPalindrome = (start, end) => {
        if (buff[start][end]) {
            return buff[start][end];
        }
        if (start >= end) {
            buff[start][end] = 1;

            return 1;
        }

        return buff[start][end] = (s[start] === s[end] ? isPalindrome(start + 1, end - 1) : 2);
    };
    const dfs = (start) => {
        if (start === length) {
            res.push(partOnce.slice());

            return;
        }
        for (let i = start; i < length; i++) {
            if (isPalindrome(start, i) === 1) {
                partOnce.push(s.substr(start, i - start + 1));
                dfs(i + 1);
                partOnce.pop();
            }
        }
    };

    for (let i = 0; i < length; i++) {
        buff[i] = new Array(length).fill(0);
    }

    dfs(0);

    return res;
};
