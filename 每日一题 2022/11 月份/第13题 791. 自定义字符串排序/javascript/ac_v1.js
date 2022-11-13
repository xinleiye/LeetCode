/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    const orderObj = {};
    const orderLength = order.length;
    for (let i = 0; i < orderLength; i++) {
        orderObj[order[i]] = i + 1;
    }

    let res = s.split("");
    res.sort((c1, c2) => {
        const o1 = orderObj[c1] ? orderObj[c1] : orderLength + 1;
        const o2 = orderObj[c2] ? orderObj[c2] : orderLength + 1;

        return o1 - o2;
    });

    return res.join("");
};
