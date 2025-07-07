/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function(k) {
    const arr = ["a"];

    while (arr.length < k) {
        const total = arr.length;

        for (let i = 0; i < total; i++) {
            arr.push(String.fromCharCode(97 + (arr[i].charCodeAt() + 1) % 97));
        }
    }

    return arr[k - 1];
};
