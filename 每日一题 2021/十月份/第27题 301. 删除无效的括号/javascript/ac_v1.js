/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    const res = [];
    let lremove = 0;
    let rremove = 0;
    const dfs = (str, start, lcount, rcount, lremove, rremove) => {
        if (lremove === 0 && rremove === 0) {
            if (isValid(str)) {
                res.push(str);
            }
            return;
        }
        for (let i = start; i < str.length; i++) {
            if (i !== start && str[i] === str[i - 1]) {
                if (str[i] === '(') {
                    lcount++;
                } else if (str[i] === ')') {
                    rcount++;
                }
                continue;
            }
            if (lremove + rremove > str.length - i) {
                return;
            }
            if (lremove > 0 && str[i] === '(') {
                dfs(str.substr(0, i) + str.substr(i + 1), i, lcount, rcount, lremove - 1, rremove);
            }
            if (rremove > 0 && str[i] === ')') {
                dfs(str.substr(0, i) + str.substr(i + 1), i, lcount, rcount, lremove, rremove - 1);
            }
            if (str[i] === '(') {
                lcount++;
            } else if (str[i] === ')') {
                rcount++;
            }
            if (rcount > lcount) {
                break;
            }
        }
    };

    for (const ch of s) {
        if (ch === '(') {
            lremove++;
        } else if (ch === ')') {
            if (lremove === 0) {
                rremove++;
            } else {
                lremove--;
            }
        }
    }
    dfs(s, 0, 0, 0, lremove, rremove);

    return res;
};

function isValid (str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            count++;
        } else if (str[i] === ')') {
            count--;
            if (count < 0) {
                return false;
            }
        }
    }

    return count === 0;
};
