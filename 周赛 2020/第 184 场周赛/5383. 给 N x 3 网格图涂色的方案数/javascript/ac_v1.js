/**
 * @param {number} n
 * @return {number}
 */
var numOfWays = function(n) {
    let mod = 1e9 + 7;
    let ryg = 6;
    let ryr = 6;

    for (let i = 1; i < n; i++) {
        let nextRyg = ((ryg * 2) % mod + (ryr * 2) % mod) % mod;
        let nextRyr = ((ryg * 2) % mod + (ryr * 3)) % mod;
        
        ryg = nextRyg;
        ryr = nextRyr;
    }

    return (ryg + ryr) % mod;
};
