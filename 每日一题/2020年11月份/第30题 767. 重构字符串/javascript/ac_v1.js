/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {
    const length = S.length;
    let index = 0;
    let res = new Array(length).fill("");
    let charNum = new Array(26).fill(0);
    let getMax2 = (arr) => {
        let max1 = -1;
        let max2;
        let index1;
        let index2;

        for (let i = 0; i < 26; i++) {
            if (arr[i] > 0) {
                if (arr[i] > max1) {
                    max2 = max1;
                    max1 = arr[i];
                    index2 = index1;
                    index1 = i;
                } else if (arr[i] >= max2){
                    max2 = arr[i];
                    index2 = i;
                }
            }
        }

        return {
            index1: index1,
            char1: String.fromCharCode(index1 + 97),
            index2: index2 >= 0 ? index2 : -1,
            char2:  index2 >= 0 ? String.fromCharCode(index2 + 97) : ""
        };
    }; 

    for(let i = 0; i < length; i++) {
        let pos = S.charCodeAt(i) - 97;

        charNum[pos]++;
        if (charNum[pos] > Math.floor((length + 1) / 2)) {
            return "";
        }
    }

    while (index < length) {
        let max2Info = getMax2(charNum);

        if (max2Info.index2 > -1) {
            res[index++] = max2Info.char1;
            res[index++] = max2Info.char2;
            charNum[max2Info.index1]--;
            charNum[max2Info.index2]--;
        } else {
            res[index++] = max2Info.char1;
        }

    }

    return res.join("");
};
