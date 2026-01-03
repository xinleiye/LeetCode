/**
 * @param {number} n
 * @return {number}
 */
var numOfWays = function(n) {
    const MOD = 1e9 + 7;
    // ryg rgy yrg ygr gry gyr
    let ryg = 6;
    // ryr rgr ygy yry grg gyg
    let ryr = 6;

    for (let i = 1; i < n; i++) {
        // ryg => yry ygr ygy gry
        // ryr => yry yrg ygy gry grg
        const nextRyg = ((ryg * 2) % MOD + (ryr * 2) % MOD) % MOD;
        const nextRyr = ((ryg * 2) % MOD + (ryr * 3)) % MOD;

        ryg = nextRyg;
        ryr = nextRyr;
    }

    return (ryg + ryr) % MOD;
};
