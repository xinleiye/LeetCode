/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let res = [];
    let index = 0;

    while (index < s.length) {
        if (s[index] !== "]") {
            res.push(s[index++]);
        } else {
            let pow = 1;
            let count = 0;
            let subStr = "";
            let str = "";

            while (res[res.length - 1] !== "[") {
                subStr = res.pop() + subStr;
            }
            res.pop();

            while (!isNaN(res[res.length - 1])) {
                count += pow * parseInt(res.pop(), 10);
                pow = pow * 10;
            }
            if (count === 0) {
                return "";
            }

            for (let i = 0; i < count; i++) {
                str += subStr;
            }

            res.push(str);
            index++;
        }
    }

    return res.join("");
};
