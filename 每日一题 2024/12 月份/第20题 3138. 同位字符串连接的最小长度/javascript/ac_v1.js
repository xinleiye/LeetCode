/**
 * @param {string} s
 * @return {number}
 */
var minAnagramLength = function(s) {
    const total = s.length;
    const factors = getFactors(total);
    let chArr = new Array(26);

    for (const f of factors) {
        let valid = true;

        chArr.fill(0);
        for (let i = 0; i < f; i++) {
            chArr[s.charCodeAt(i) - 97]++;
        }
        for (let i = f; i < total; i += f) {
            const chArrTemp = new Array(26).fill(0);

            for (let j = i; j < i + f; j++) {
                chArrTemp[s.charCodeAt(j) - 97]++;
            }
            if (!check(chArr, chArrTemp)) {
                valid = false;
                break;
            }
        }
        if (valid) {
            return f;
        }
    }

    return total;
};

function check(arr1, arr2) {
    for (let i = 0; i < 26; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

function getFactors(num) {
    const factor = [];
    const max = Math.floor(Math.sqrt(num));
    
    for (let i = 1; i <= max; i++) {
        if (num % i === 0) {
            factor.push(i);
            if (num / i !== i) {
                factor.push(num / i);
            }
        }
    }
    
    return factor.sort((f1, f2) => f1 - f2);
}
