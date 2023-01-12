/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function(s, knowledge) {
    const keyMap = new Map();
    for (const [key, val] of knowledge) {
        keyMap.set(key, val);
    }

    let res = "";
    let index = 0;
    const total = s.length;
    while (index < total) {
        const cur = s[index];
        if (cur >= "a" && cur <= "z") {
            res += cur;
        } else if (cur === "(") {
            let key = "";
            index++;
            while (index < total && s[index] !== ")") {
                key += s[index];
                index++;
            }
            res += keyMap.has(key) ? keyMap.get(key) : "?";
        }
        index++;
    }

    return res;
};
