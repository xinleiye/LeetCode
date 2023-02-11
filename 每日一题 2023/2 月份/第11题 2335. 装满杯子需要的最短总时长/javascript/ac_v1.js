/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function(amount) {
    const [m1, m2, m3] = amount.sort((a1, a2) => a1 - a2);

    if (m1 + m2 <= m3) {
        return m3;
    } else {
        return Math.ceil((m1 + m2 + m3) / 2);
    }
};
