/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function(words) {
    let res = 0;
    const hashMap = new Map();
    const generateWordHash = (word) => {
        const chObj = {
            a: 1,
            b: 2,
            c: 3,
            d: 4,
            e: 5,
            f: 6,
            g: 7,
            h: 8,
            i: 9,
            j: 10,
            k: 11,
            l: 12,
            m: 13,
            n: 14,
            o: 15,
            p: 16,
            q: 17,
            r: 18,
            s: 19,
            t: 20,
            u: 21,
            v: 22,
            w: 23,
            x: 24,
            y: 25,
            z: 26
        };
        const hash = [];
        const charSet = new Set();

        for (const ch of word) {
            if (!charSet.has(ch)) {
                hash.push(chObj[ch]);
                charSet.add(ch);
            }
        }

        return hash.sort((v1, v2) => v1 - v2).join("#");
    };

    for (const w of words) {
        const wordHash = generateWordHash(w);

        if (hashMap.has(wordHash)) {
            hashMap.set(wordHash, hashMap.get(wordHash) + 1);
        } else {
            hashMap.set(wordHash, 1);
        }
    }
    hashMap.forEach(val => {
        res += val * (val - 1) / 2;
    });

    return res;
};
