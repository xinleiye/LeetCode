/**
 * @param {character[]} keys
 * @param {string[]} values
 * @param {string[]} dictionary
 */
var Encrypter = function(keys, values, dictionary) {
    this.keyValueMap = new Map();
    for (let i = 0, len = keys.length; i < len; i++) {
        const key = keys[i];
        const value = values[i];
        this.keyValueMap.set(key, value);
        if (this.keyValueMap.has(value)) {
            this.keyValueMap.get(value).push(key);
        } else {
            this.keyValueMap.set(value, [key]);
        }
    }
    this.encryptDictMap = new Map();
    for (const d of dictionary) {
        const encry = this.encrypt(d);
        if (this.encryptDictMap.has(encry)) {
            this.encryptDictMap.set(encry, this.encryptDictMap.get(encry) + 1);
        } else {
            this.encryptDictMap.set(encry, 1);
        }
    }
};

/** 
 * @param {string} word1
 * @return {string}
 */
Encrypter.prototype.encrypt = function(word1) {
    const res = [];
    for (const ch of word1) {
        res.push(this.keyValueMap.get(ch));
    }
    return res.join("");
};

/** 
 * @param {string} word2
 * @return {number}
 */
Encrypter.prototype.decrypt = function(word2) {
    return this.encryptDictMap.get((word2)) || 0;
};

/**
 * Your Encrypter object will be instantiated and called as such:
 * var obj = new Encrypter(keys, values, dictionary)
 * var param_1 = obj.encrypt(word1)
 * var param_2 = obj.decrypt(word2)
 */
