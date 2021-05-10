/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function(logs) {
    const baseYear = 1950;
    const population = new Array(100).fill(0);
    let maxPopulation = -100;
    let res = 0;

    logs.forEach(item => {
        population[item[0] - baseYear]++;
        population[item[1] - baseYear]--;
    });
    for (let i = 1; i < 100; i++) {
        population[i] += population[i - 1];
    }

    for (let i = 99; i >= 0; i--) {
        if (population[i] >= maxPopulation) {
            maxPopulation = population[i];
            res = i;
        }
    }

    return res + baseYear;
};
