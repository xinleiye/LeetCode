/**
 * @param {string} s
 * @return {number}
 */
var numWays = function(s) {
    let res = 0;
    let mod = 1e9 + 7;
    let oneCount = 0;
    let oneArray = new Array(s.length).fill(0);
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "1") {
            oneCount++;
            oneArray[i] = oneCount;
        }
    }

    if (oneCount % 3) {
        return 0;
    }

    if (oneCount === 0) {
        res = (s.length - 1) * (s.length - 2) / 2 % mod;
    } else {
        let index = 0;
        let onePos = [];
        let count = oneCount / 3;

        while (index < s.length) {
            if (oneArray[index] > 0 && oneArray[index] % count === 0) {
                let preOne = index;

                index++;
                while (oneArray[index] === 0) {
                    index++;
                }
                onePos.push(index - preOne);
            } else {
                index++;
            }
        }
        res = onePos[0] * onePos[1] % mod;
    }

    return res;
};
