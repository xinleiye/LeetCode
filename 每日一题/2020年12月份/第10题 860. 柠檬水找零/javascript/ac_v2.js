/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let five = 0;
    let ten = 0;

    for (let i = 0; i < bills.length; i++) {
        let diff = bills[i] - 5;

        if (diff === 5) {
            if (five > 0) {
                five--;
                ten++;
            } else {
                return false;
            }
        } else if (diff === 15) {
            if (ten > 0) {
                if (five > 0) {
                    five--;
                    ten--;
                } else {
                    return false;
                }
            } else if (five > 2){
                five -= 3;
            } else {
                return false;
            }
        } else {
            five++;
        }
    }

    return true;
};
