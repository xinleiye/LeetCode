
var Fancy = function() {
    this.mod = 1e9 + 7;
    this.number = [];
    this.opIndex = 0;
    this.opNumber = [];
    this.opType = [];
    this.getOpIndex = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
Fancy.prototype.append = function(val) {
    this.number.push(val);
    this.getOpIndex.push(this.opIndex);
};

/** 
 * @param {number} inc
 * @return {void}
 */
Fancy.prototype.addAll = function(inc) {
    this.opNumber.push(inc);
    this.opType.push("p");
    this.opIndex++;
};

/** 
 * @param {number} m
 * @return {void}
 */
Fancy.prototype.multAll = function(m) {
    this.opNumber.push(m);
    this.opType.push("m");
    this.opIndex++;
};

/** 
 * @param {number} idx
 * @return {number}
 */
Fancy.prototype.getIndex = function(idx) {
    if (idx >= this.number.length) {
        return -1;
    } else {
        let base = this.number[idx];

        for (let i = this.getOpIndex[idx]; i < this.opIndex; i++) {
            switch (this.opType[i]) {
                case "p":
                    base = (base + this.opNumber[i]) % this.mod;
                    break;
                case "m":
                    base = (base * this.opNumber[i]) % this.mod;
                    break;
                default:
                    break;
            }
        }
        this.number[idx] = base;
        this.getOpIndex[idx] = this.opIndex;
        
        return base;
    }
};

/**
 * Your Fancy object will be instantiated and called as such:
 * var obj = new Fancy()
 * obj.append(val)
 * obj.addAll(inc)
 * obj.multAll(m)
 * var param_4 = obj.getIndex(idx)
 */
