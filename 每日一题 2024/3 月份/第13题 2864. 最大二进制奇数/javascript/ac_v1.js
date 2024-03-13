/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    let one = 0;
    const res = new Array(s.length).fill("0");

    for (const b of s) {
        if (b === "1") {
            one++;
        }
    }
    res[res.length - 1] = "1";
    one--;
    while (one) {
        res[one - 1] = "1";
        one--;
    }

    return res.join("");
};
