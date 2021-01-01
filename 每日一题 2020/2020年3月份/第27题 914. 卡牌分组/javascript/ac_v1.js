/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    let deckMap = new Map();
    let xValue = deck.length;
    let getGcd = (num1, num2) => {
        let num;

        while (num2 > 0) {
            num = num1 % num2;
            num1 = num2;
            num2 = num;
        }

        return num1;
    };

    deck.forEach((val) => {
        if (deckMap.has(val)) {
            deckMap.set(val, deckMap.get(val) + 1);
        } else {
            deckMap.set(val, 1);
        }
    });

    deckMap.forEach((val, key) => {
        xValue = getGcd(val, xValue);
    });

    return xValue > 1;
};
