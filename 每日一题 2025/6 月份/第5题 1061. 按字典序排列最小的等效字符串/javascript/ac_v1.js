/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function(s1, s2, baseStr) {
    const smallestStr = baseStr.split("");
    const chUnion = new Union(26);
    const length = s1.length;

    for (let i = 0; i < length; i++) {
        chUnion.merge(s1.charCodeAt(i) - 97, s2.charCodeAt(i) - 97);
    }

    return smallestStr.map(ch => {
        return String.fromCharCode(chUnion.find(ch.charCodeAt(0) - 97) + 97);
    }).join("");
};

class Union {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i);
    }

    find(tar) {
        if (this.parent[tar] !== tar) {
            this.parent[tar] = this.find(this.parent[tar]);
        }

        return this.parent[tar];
    }

    merge(tar1, tar2) {
        tar1 = this.find(tar1);
        tar2 = this.find(tar2);
        if (tar1 === tar2) {
            return;
        }
        if (tar1 > tar2) {
            [tar1, tar2] = [tar2, tar1];
        }
        this.parent[tar2] = tar1;
    }
}
