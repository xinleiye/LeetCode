/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    let res = "";
    let count = 0;

    if (n === 0) {
        return "0";
    }
    while (n > 0) {
        let rest = n % 10;
        
        res = rest + res;
        n = (n - rest) / 10;
        count++;
        if (count === 3) {
            res = "." + res;
            count = 0;
        }
    }

    return res[0] === "." ? res.slice(1) : res;
};
