/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var findTheWinner = function(n, k) {
    let index = 0;
    let peoples = new Array(n);

    for (let i = 0; i < n; i++) {
        peoples[i] = i + 1;
    }

    while (peoples.length !== 1) {
        index = (index + k - 1) % peoples.length;
        peoples.splice(index, 1);
    }

    return peoples[0];
};
