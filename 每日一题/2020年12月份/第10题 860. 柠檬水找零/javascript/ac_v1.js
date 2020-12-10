/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    const cashMap = new Map()

    cashMap.set(5, 0);
    cashMap.set(10, 0);
    cashMap.set(20, 0);
    for (let i = 0; i < bills.length; i++) {
        let diff = bills[i] - 5;

        if (diff === 5) {
            let five = cashMap.get(5);

            if (five > 0) {
                cashMap.set(5, five - 1);
            } else {
                return false;
            }
        } if (diff === 15) {
            let five = cashMap.get(5);
            let ten = cashMap.get(10);

            if (ten > 0) {
                if (five > 0) {
                    cashMap.set(5, five - 1);
                    cashMap.set(10, ten - 1);
                } else {
                    return false;
                }
            } else if (five > 2){
                cashMap.set(5, five - 3)
            } else {
                return false;
            }
        }
        cashMap.set(bills[i], cashMap.get(bills[i]) + 1);
    }

    return true;
};
