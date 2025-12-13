/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
var validateCoupons = function(code, businessLine, isActive) {
    const coupons = [[], [], [], []];
    const total = code.length;
    const res = [];

    for (let i = 0; i < total; i++) {
        if ((/^\w+$/).test(code[i]) && isActive[i]) {
            switch (businessLine[i]) {
                case "electronics":
                    coupons[0].push(code[i]);
                    break;
                case "grocery":
                    coupons[1].push(code[i]);
                    break;
                case "pharmacy":
                    coupons[2].push(code[i]);
                    break;
                case "restaurant":
                    coupons[3].push(code[i]);
                    break;
                default:
                    break;
            }
        }
    }
    for (const c of coupons) {
        c.sort();
        res.push(...c);
    }

    return res;
};
