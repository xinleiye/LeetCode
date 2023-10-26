/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let res = 0;

    for (const d of details) {
        if (d.substring(11, 13) > "60") {
            res++;
        }
    }

    return res;
};
