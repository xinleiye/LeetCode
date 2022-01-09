/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {
    let res = 0;
    const diff = new Map();
    const same = new Map();
    const w = [];
    const add2Map = (map, str) => {
        if (map.has(str)) {
            map.set(str, map.get(str) + 1);
        } else {
            map.set(str, 1);
        }
    };
    const removeFromMap = (map, tar) => {
        if (map.has(tar)) {
            const count = map.get(tar);
            
            if (count > 1) {
                map.set(tar, count - 1);
            } else {
                map.delete(tar);
            }
        }
    };

    words.forEach(word => {
        const [ch1, ch2] = word.split("");
        
        if (ch1 === ch2) {
            add2Map(same, word);
        } else {
            const drow = ch2 + ch1;

            if (diff.has(drow)) {
                res += 4;
                w.push(word, drow);
                
                removeFromMap(diff, drow);
            } else {
                add2Map(diff, word);
            }
        }
    });

    let oddDiffNum = false;
    same.forEach(count => {
        if (count % 2) {
            res += (count - 1) * 2;
            oddDiffNum = true;
        } else {
            res += count * 2
        }
    });
    if (oddDiffNum) {
        res += 2;
    }

    return res;
};
