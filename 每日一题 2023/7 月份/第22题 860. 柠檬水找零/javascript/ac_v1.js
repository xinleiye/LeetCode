/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let b10 = 0;
    let b5 = 0;

    for (const b of bills) {
        let diff = b - 5;

        if (diff === 15) {
            if (b10 > 0) {
                if (b5 > 0) {
                    b10--;
                    b5--;
                } else {
                    return false;
                }
            } else if (b5 >= 3) {
                b5 -= 3;
            } else {
                return false;
            }
        } else if (diff === 5) {
            if (b5 > 0) {
                b5--;
                b10++;
            } else {
                return false;
            }
        } else {
            b5++;
        }
    }

    return true;
};
