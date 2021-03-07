/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function(n) {
    const pow3 = [];
    let mask = 0;
    let pow = 0;
    const getNum = (mask) => {
        let num = 0;
        let index = 0;

        while (mask) {
            if (mask & 1) {
                num += pow3[index];
            }
            index++;
            mask = mask >>> 1;
        }

        return num;
    };

    while (Math.pow(3, pow) <= n) {
        pow3.push(Math.pow(3, pow));
        mask = (mask << 1) | 1;
        pow++;
    }

    for (let i = 1; i <= mask; i++) {
        if (getNum(i) === n) {
            return true;
        }
    }
    
    return false;
};
