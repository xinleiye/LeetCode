/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let parenthesesMap = new Map();

    parenthesesMap.set(0, [""]);
    parenthesesMap.set(1, ["()"]);

    for (let i = 2; i <= n; i++) {
        let parentheses = [];

        for (let k = 0; k < i; k++) {
            let parenthesesIn = parenthesesMap.get(k);
            let parenthesesOut = parenthesesMap.get(i - 1 - k);

            parenthesesIn.forEach(aIn => {
                parenthesesOut.forEach(aOut => {
                    parentheses.push(`(${aIn})${aOut}`);
                });
            });
        }

        parenthesesMap.set(i, parentheses);
    }

    return parenthesesMap.get(n);
};
