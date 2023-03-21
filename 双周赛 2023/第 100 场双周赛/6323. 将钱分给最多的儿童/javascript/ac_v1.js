/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */
var distMoney = function(money, children) {
    if (money < children) {
        return -1;
    }
    if (money < children + 7) {
        return 0;
    }
    if (money > children * 8) {
        return children - 1;
    }

    let res = Math.floor((money - children) / 7);
    const rest = (money - children) % 7;
    if (rest === 3 && res === children - 1) {
        res--;
    }

    return res;
};
