
var ATM = function() {
    this.cash = [20, 50, 100, 200, 500];
    this.cashCount = new Array(5).fill(0);
};

/** 
 * @param {number[]} banknotesCount
 * @return {void}
 */
ATM.prototype.deposit = function(banknotesCount) {
    for (let i = 0; i < 5; i++) {
        this.cashCount[i] += banknotesCount[i];
    }
    return null;
};

/** 
 * @param {number} amount
 * @return {number[]}
 */
ATM.prototype.withdraw = function(amount) {
    let index = 4;
    const res = new Array(5).fill(0);
    const cash = this.cash;
    const cashCount = this.cashCount;

    while (index >= 0 && amount > 0) {
        if (amount >= cash[index]) {
            res[index] = Math.min((amount - amount % cash[index]) / cash[index], cashCount[index]);
            amount -= res[index] * cash[index];
        }
        index--;
    }

    if (amount === 0) {
        for (let i = 0; i < 5; i++) {
            cashCount[i] -= res[i];
        }
        return res;
    } else {
        return [-1];
    }
};

/**
 * Your ATM object will be instantiated and called as such:
 * var obj = new ATM()
 * obj.deposit(banknotesCount)
 * var param_2 = obj.withdraw(amount)
 */
