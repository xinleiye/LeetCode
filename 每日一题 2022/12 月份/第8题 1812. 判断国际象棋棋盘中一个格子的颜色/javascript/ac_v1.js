/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    const colorObj = {
        a: 1,
        b: 0,
        c: 1,
        d: 0,
        e: 1,
        f: 0,
        g: 1,
        h: 0
    };
    const [x, y] = coordinates.split("");

    return colorObj[x] === (Number(y) + 1) % 2;
};
