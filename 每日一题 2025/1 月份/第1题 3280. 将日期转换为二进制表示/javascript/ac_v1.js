/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    return date.split("-").map(item => {
        let num = Number(item);
        const bits = [];

        while (num) {
            bits.unshift(num & 1);
            num = num >>> 1;
        }

        return bits.join("");
    }).join("-");
};
