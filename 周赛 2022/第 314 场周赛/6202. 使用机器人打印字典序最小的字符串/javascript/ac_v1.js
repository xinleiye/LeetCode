/**
 * @param {string} s
 * @return {string}
 */
var robotWithString = function(s) {
    const chars = new Array(26).fill(0);    
    for(const ch of s) {
        chars[ch.charCodeAt() - 97]++;
    }

    const res = [];
    const t = [];
    let index = 0;
    const total = s.length;
    while (index < total) {
        let minCh = "";

        for (let i = 0; i < 26; i++) {
            if (chars[i]) {
                minCh = String.fromCharCode(i + 97);
                break;
            }
        }
        if (minCh) {
            if (!t.length) {
                while (index < total && s[index] !== minCh) {
                    chars[s.charCodeAt(index) - 97]--;
                    t.push(s[index]);
                    index++;
                }
                chars[s.charCodeAt(index) - 97]--;
                t.push(s[index]);
                index++;

                res.push(t.pop());
            } else {
                if (t[t.length - 1] > minCh) {
                    while (index < total && s[index] !== minCh) {
                        chars[s.charCodeAt(index) - 97]--;
                        t.push(s[index]);
                        index++;
                    }
                    chars[s.charCodeAt(index) - 97]--;
                    t.push(s[index]);
                    index++;

                    res.push(t.pop());
                } else {
                    while (t.length && t[t.length - 1] <= minCh) {
                        res.push(t.pop());
                    }
                }
            }
        }
    }
    while (t.length) {
        res.push(t.pop());
    }

    return res.join("");
};
