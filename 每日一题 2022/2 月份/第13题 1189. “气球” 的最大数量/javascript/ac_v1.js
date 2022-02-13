/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let res = 1e4;
    const BALLOON = "balon";
    const balloonMap = new Map();

    for (const ch of BALLOON) {
        balloonMap.set(ch, 0);
    }
    for (const ch of text) {
        if (BALLOON.indexOf(ch) >= 0) {
            balloonMap.set(ch, balloonMap.get(ch) + 1);
        }
    }
    balloonMap.forEach((count, ch) => {
        if (ch === "b" || ch === "a" || ch === "n") {
            res = Math.min(res, count);
        } else {
            res = Math.min(res, Math.floor(count / 2));
        }
    });

    return res;
};
