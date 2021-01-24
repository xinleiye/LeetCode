/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var minCharacters = function(a, b) {
    let charA;
    let charB;
    let charInfoA;
    let charInfoB;
    const getCharNum = (str) => {
        const charNum = new Array(26).fill(0);
        
        for (let i = 0; i < str.length; i++) {
            charNum[str.charCodeAt(i) - 97]++;
        }
        
        return charNum;
    };
    const getCharInfo = (charArr1, charArr2) => {
        let info = [0, 0, 0];
        let minIndex = 0;
        let maxIndex = 25;
        
        for (let i = 0; i < 26; i++) {
            info[2] = Math.max(info[2], Math.min(charArr1[i], charArr2[i]));
        }
        for (let i = 0; i < 26; i++) {
            if (charArr2[i] > 0) {
                minIndex = i;
                break;
            }
        }
        for (let i = 0; i < minIndex; i++) {
            info[0] += charArr1[i];
        }

        for (let i = 25; i >= 0; i--) {
            if (charArr2[i] > 0) {
                maxIndex = i;
                break;
            }
        }
        for (let i = 25; i > maxIndex; i--) {
            info[1] += charArr1[i];
        }
      
        return info;
    };
    const getResult = (infoA, infoB, charB) => {
        let s = [0, 0, 0];
        
        if (charB[0] > 0) {
            s[0] = a.length + b.length;
        } else {
            s[0] = infoA[1] + infoA[2];
        }
        if (charB[25] > 0) {
            s[1] = a.length + b.length;
        } else {
            s[1] = infoA[0] + infoA[2];
        }
        s[2] = a.length - infoA[2] + b.length - infoB[2];

        return Math.min(...s);
    };

    charA = getCharNum(a);
    charB = getCharNum(b);

    charInfoA = getCharInfo(charA, charB);
    charInfoB = getCharInfo(charB, charA);

    return Math.min(getResult(charInfoA, charInfoB, charB), getResult(charInfoB, charInfoA, charA));
};
