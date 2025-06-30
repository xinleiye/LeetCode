/**
 * @param {string} s
 * @return {string}
 */
var robotWithString = function(s) {
    const total = s.length;
    const minPost = new Array(total + 1);
    const res = [];
    const tarArr = [];

    minPost[total] = "z";
    for (let i = total - 1; i >= 0; i--) {
        minPost[i] = s[i] < minPost[i + 1] ? s[i] : minPost[i + 1];
    }
    for (let i = 0; i < total; i++) {
        tarArr.push(s[i]);
        while (tarArr.length > 0 && tarArr[tarArr.length - 1] <= minPost[i + 1]) {
            res.push(tarArr.pop());
        }
    }

    return res.join("");    
};
