
var ATM = function() {
    this.notesType = [20, 50, 100, 200, 500];
    this.notesCount = new Array(5).fill(0);
};

/** 
 * @param {number[]} banknotesCount
 * @return {void}
 */
ATM.prototype.deposit = function(banknotesCount) {
    const total = this.notesType.length;

    for (let i = 0; i < total; i++) {
        this.notesCount[i] += banknotesCount[i];
    }
};

/** 
 * @param {number} amount
 * @return {number[]}
 */
ATM.prototype.withdraw = function(amount) {
    const res = new Array(5).fill(0);
    const totalType = this.notesType.length;

    for (let i = totalType - 1; i >= 0; i--) {
        if (amount >= this.notesType[i]) {
            res[i] = Math.floor(Math.min(amount, this.notesType[i] * this.notesCount[i]) / this.notesType[i]);
            amount -= res[i] * this.notesType[i];
        }
    }
    if (amount !== 0) {
        return [-1];
    }
    for (let i = 0; i < totalType; i++) {
        this.notesCount[i] -= res[i];
    }

    return res;
};

/** 
 * Your ATM object will be instantiated and called as such:
 * var obj = new ATM()
 * obj.deposit(banknotesCount)
 * var param_2 = obj.withdraw(amount)
 */
