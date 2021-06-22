/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
    let res = [];
    const charArr = s.split("");
    const length = s.length;
    const strSet = new Set();
    const dfs = (buff, flag, preSet) => {
        const str = buff.join("");

        if (buff.length === length) {
            if (!strSet.has(str)) {
                res.push(str);
                strSet.add(str);
            }

            return;
        } else {
            if (preSet.has(str)) {
                return;
            } else {
                preSet.add(str);
            }
        }

        for (let i = 0; i < length; i++) {
            if (!flag[i]) {
                buff.push(charArr[i]);
                flag[i] = true;
                dfs(buff, flag, preSet);
                buff.pop();
                flag[i] = false;
            }
        }
    };

    for (let i = 0; i < length; i++) {
        const visited = new Array(length).fill(false);
        const exitSet = new Set();
        const choiceChar = [];

        dfs(choiceChar, visited, exitSet);
    }

    return res;
};
