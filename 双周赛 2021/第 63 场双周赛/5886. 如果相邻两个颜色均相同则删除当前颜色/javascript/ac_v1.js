/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function(colors) {
    let colorA = 0;
    let colorB = 0;
    const length = colors.length;
    const getColor = (target) => {
        let index = 0;
        let res = 0;

        while (index < length) {
            if (colors[index] === target) {
                let count = 0;
                
                while (index < length && colors[index] === target) {
                    count++;
                    index++;
                }
                if (count >= 3) {
                    res += count - 2;
                }
            }
            index++;
        }

        return res;
    };

    colorA = getColor('A');
    colorB = getColor('B');

    return colorA > colorB;
};
