/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    let res = [];
    let power = 0;
    const powerStr = ['', 'Thousand', 'Million', 'Billion'];

    if (num === 0) {
        return 'Zero';
    }
    while (num > 0) {
        const rest = num % 1000;

        if (rest > 0) {
            power && res.unshift(powerStr[power]);
            res.unshift(getHundredNum(num % 1000));
        }
        num = Math.floor(num / 1000);
        power++;
    }

    return res.join(' ');
};

function getHundredNum(number) {
    const str = [];
    const numStr = {
        1: 'One',
        2: 'Two',
        3: 'Three',
        4: 'Four',
        5: 'Five',
        6: 'Six',
        7: 'Seven',
        8: 'Eight',
        9: 'Nine',
        10: 'Ten',
        11: 'Eleven',
        12: 'Twelve',
        13: 'Thirteen',
        14: 'Fourteen',
        15: 'Fifteen',
        16: 'Sixteen',
        17: 'Seventeen',
        18: 'Eighteen',
        19: 'Nineteen',
        20: 'Twenty',
        30: 'Thirty',
        40: 'Forty',
        50: 'Fifty',
        60: 'Sixty',
        70: 'Seventy',
        80: 'Eighty',
        90: 'Ninety',
    };
    
    if (number > 99) {
        str.push(`${numStr[Math.floor(number / 100)]} Hundred`);
        number = number % 100;
    }
    if (number > 19) {
        str.push(numStr[Math.floor(number / 10) * 10]);
        number = number % 10;
    }
    if (number > 9) {
        str.push(numStr[number]);
        number = 0;
    }
    if (number > 0) {
        str.push(numStr[number]);
    }
    return str.join(' ');
};
