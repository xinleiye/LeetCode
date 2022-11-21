/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let res = 0;
    let keyIndex = 0;

    if (ruleKey === "color") {
        keyIndex = 1;
    } else if (ruleKey === "name") {
        keyIndex = 2;
    }
    for (const it of items) {
        if (it[keyIndex] === ruleValue) {
            res++;
        }
    }

    return res;
};
