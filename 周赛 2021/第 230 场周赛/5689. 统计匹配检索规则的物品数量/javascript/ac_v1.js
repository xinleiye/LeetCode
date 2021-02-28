/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let res = 0;
    const typeIndex = ["type", "color", "name"].indexOf(ruleKey);

    items.forEach(item => {
        if (item[typeIndex] === ruleValue) {
            res++;
        }
    });
    
    return res;
};
