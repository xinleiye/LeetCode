/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximumImportance = function(n, roads) {
    const cities = new Array(n).fill(0);
    for (const [c1, c2] of roads) {
        cities[c1]++;
        cities[c2]++;
    }
    const cityIndex = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        cityIndex[i] = i;
    }
    cityIndex.sort((c1, c2) => cities[c2] - cities[c1]);

    let res = 0;
    for (let i = n; i >= 1; i--) {
        res += i * cities[cityIndex[n - i]];
    }

    return res;
};
