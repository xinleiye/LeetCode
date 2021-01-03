/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
var checkPalindromeFormation = function(a, b) {
    let isPalindrome = (str) => {
        let left = 0;
        let right = str.length - 1;

        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }
            left++;
            right--;
        }

        return true;
    };
    let canPalindrome = (preCur, sufCur, sufTotal) => {
        let odd = 0;

        for (let i = 0; i < 26; i++) {
            if ((preCur[i] + sufTotal[i] - sufCur[i]) % 2) {
                odd++;
            }
            if (odd > 1) {
                return false;
            }
        }

        return true;
    };
    let aTotalChar = new Array(26).fill(0);
    let bTotalChar = new Array(26).fill(0);
    let aCurrentChar = new Array(26).fill(0);
    let bCurrentChar = new Array(26).fill(0);

    if (isPalindrome(a) || isPalindrome(b)) {
        return true;
    }

    for (let i = 0; i < a.length; i++) {
        aTotalChar[a.charCodeAt(i) - 97]++;
        bTotalChar[b.charCodeAt(i) - 97]++;
    }

    for (let i = 0; i < a.length; i++) {
        aCurrentChar[a.charCodeAt(i) - 97]++;
        bCurrentChar[b.charCodeAt(i) - 97]++;

        if (canPalindrome(aCurrentChar, bCurrentChar, bTotalChar)) {
            if (isPalindrome(a.slice(0, i + 1) + b.slice(i + 1))) {
                return true;
            }
        }
        if (canPalindrome(bCurrentChar, aCurrentChar, aTotalChar)) {
            if (isPalindrome(b.slice(0, i + 1) + a.slice(i + 1))) {
                return true;
            }
        }
    }
    
    return false;
};
