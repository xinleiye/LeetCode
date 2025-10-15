/**
 * @param {number} rows
 */
var Spreadsheet = function(rows) {
    this.spread = new Map();
};

/** 
 * @param {string} cell 
 * @param {number} value
 * @return {void}
 */
Spreadsheet.prototype.setCell = function(cell, value) {
    this.spread.set(cell, value);
};

/** 
 * @param {string} cell
 * @return {void}
 */
Spreadsheet.prototype.resetCell = function(cell) {
    this.spread.set(cell, 0);
};

/** 
 * @param {string} formula
 * @return {number}
 */
Spreadsheet.prototype.getValue = function(formula) {
    const f = parseFormula(formula);
    let n1 = 0;
    let n2 = 0;

    if (typeof f[0] === "string") {
        n1 = this.spread.has(f[0]) ? this.spread.get(f[0]) : 0;
    } else {
        n1 = f[0];
    }
    if (typeof f[1] === "string") {
        n2 = this.spread.has(f[1]) ? this.spread.get(f[1]) : 0;
    } else {
        n2 = f[1];
    }

    return n1 + n2;
};

/** 
 * Your Spreadsheet object will be instantiated and called as such:
 * var obj = new Spreadsheet(rows)
 * obj.setCell(cell,value)
 * obj.resetCell(cell)
 * var param_3 = obj.getValue(formula)
 */

function parseFormula(formula) {
    const f = formula.substring(1).split("+");
    const res = [];

    if (f[0][0] >= "A" && f[0][0] <= "Z") {
        res.push(f[0]);
    } else {
        res.push(Number(f[0]));
    }
    if (f[1][0] >= "A" && f[1][0] <= "Z") {
        res.push(f[1]);
    } else {
        res.push(Number(f[1]));
    }

    return res;
}
