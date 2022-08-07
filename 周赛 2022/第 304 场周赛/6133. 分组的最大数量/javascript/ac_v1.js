/**
 * @param {number[]} grades
 * @return {number}
 */
var maximumGroups = function(grades) {
    return Math.floor((Math.sqrt(1 + 8 * grades.length) - 1) / 2);
};
