/**
 * @param {string} time
 * @return {number}
 */
var countTime = function(time) {
    let hCount = 1;
    let mCount = 1;
    const [hh, mm] = time.split(":");
    const [h1, h2] = hh.split("");
    const [m1, m2] = mm.split("");

    if (h2 === "?") {
        if (h1 === "?") {
            hCount = 24;
        } else if (h1 === "2") {
            hCount = 4;
        } else {
            hCount = 10;
        }
    } else if (h2 <= "3") {
        if (h1 === "?") {
            hCount = 3;
        }
    } else {
        if (h1 === "?") {
            hCount = 2;
        }
    }
    if (m2 === "?") {
        if (m1 === "?") {
            mCount = 60;
        } else {
            mCount = 10
        }
    } else {
        if (m1 === "?") {
            mCount = 6;
        }
    }

    return hCount * mCount;
};
