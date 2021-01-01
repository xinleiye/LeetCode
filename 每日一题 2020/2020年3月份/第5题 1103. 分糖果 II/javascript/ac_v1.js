/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    let res = new Array(num_people).fill(0);
    let num = Math.floor((Math.sqrt(8 * candies + 1) - 1) / 2);
    let rest = num % num_people;
    let base = (num - rest) / num_people;

    if (base === 0) {
        for (let i = 0; i < rest; i++) {
            res[i] = 1 + i;
        }
    } else {
        for (let i = 0; i < num_people; i++) {
            // 首项为 i + 1, 公差为 num_people, 项数为 base 的等差数列求和
            res[i] = base * (1 + i) + base * (base - 1) * num_people / 2;
        }
        for (let i = 0; i < rest; i++) {
            res[i] += num_people * base + 1 + i;
        }
    }

    res[rest] += candies - num * (num + 1) / 2;

    return res;
};
