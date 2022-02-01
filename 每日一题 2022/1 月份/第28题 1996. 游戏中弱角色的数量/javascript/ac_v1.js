/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function(properties) {
    let res = 0;
    let maxDef = 0;

    properties.sort((p1, p2) => p1[0] === p2[0] ? p1[1] - p2[1] : p2[0] - p1[0]);
    properties.forEach(p => {
        if (p[1] < maxDef) {
            res++;
        } else {
            maxDef = p[1];
        }
    });

    return res;
};
