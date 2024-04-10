/**
 * @param {string} binary
 * @return {string}
 */
var maximumBinaryString = function(binary) {
    const zeroIndex = binary.indexOf("0");
    if (zeroIndex < 0) {
        return binary;
    }

    const res = new Array(binary.length).fill("1");
    let zero = 0;
    for (const n of binary) {
        if (n === "0") {
            zero++;
        }
    }
    res[zeroIndex + zero - 1] = "0";

    return res.join("");
};
