/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    let res = new Array(code.length).fill(0);
    let codeK = [];
    let codeSumK = [];
    
    if (k === 0) {
        return res;
    }
    if (k > 0) {
        for (let i = 0; i < code.length; i++) {
            codeK.push(code[i]);
        }
        for (let i = 0; i < k; i++) {
            codeK.push(code[i]);
        }

        codeSumK.push(codeK[0]);
        for (let i = 1; i < codeK.length; i++) {
            codeSumK.push(codeSumK[codeSumK.length - 1] + codeK[i]);
        }
        for (let i = 0; i < code.length; i++) {
            res[i] = codeSumK[i + k] - codeSumK[i];
        }
    }
    if (k < 0) {
        for (let i = code.length + k; i < code.length; i++) {
            codeK.push(code[i]);
        }
        for (let i = 0; i < code.length; i++) {
            codeK.push(code[i]);
        }

        codeSumK.push(0);
        for (let i = 0; i < codeK.length; i++) {
            codeSumK.push(codeSumK[codeSumK.length - 1] + codeK[i]);
        }
        for (let i = 0; i < code.length; i++) {
            res[i] = codeSumK[i - k] - codeSumK[i];
        }
    }

    return res;
};
