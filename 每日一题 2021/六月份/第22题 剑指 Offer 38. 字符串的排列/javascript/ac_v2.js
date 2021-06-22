/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
    let res = [];
    const charArr = s.split("");
    const length = s.length;
    const strSet = new Set();
    const visited = new Array(length).fill(false);
    const choiceChar = [];
    const dfs = () => {
        const str = choiceChar.join("");

        if (choiceChar.length === length) {
            if (!strSet.has(str)) {
                res.push(str);
                strSet.add(str);
            }

            return;
        }

        for (let i = 0; i < length; i++) {
            if (visited[i] || (i > 0 && visited[i - 1] && charArr[i - 1] === charArr[i])) {
                continue;
            }
            choiceChar.push(charArr[i]);
            visited[i] = true;
            dfs();
            choiceChar.pop();
            visited[i] = false;
        }
    };

    charArr.sort();
    dfs();

    return res;
};
