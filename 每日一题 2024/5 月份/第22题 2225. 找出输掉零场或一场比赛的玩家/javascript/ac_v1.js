/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    const degree = new Map();
    for (const [m1, m2] of matches) {
        if (degree.has(m1)) {
            degree.get(m1)[1]++;
        } else {
            degree.set(m1, [0, 1]);
        }
        if (degree.has(m2)) {
            degree.get(m2)[0]++;
        } else {
            degree.set(m2, [1, 0]);
        }
    }

    const lose0 = [];
    const lose1 = [];
    degree.forEach((d, m) => {
        if (d[0] === 0) {
            lose0.push(m);
        } else if (d[0] === 1) {
            lose1.push(m);
        }
    });
    lose0.sort((m1, m2) => m1 - m2);
    lose1.sort((m1, m2) => m1 - m2);

    return [lose0, lose1];
};
