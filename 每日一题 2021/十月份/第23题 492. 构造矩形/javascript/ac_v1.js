/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let width = Math.floor(Math.sqrt(area));

    while (area % width) {
        width--;
    }

    return [area / width, width];
};
