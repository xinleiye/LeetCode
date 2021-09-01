/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
 var compareVersion = function(version1, version2) {
    const v1 = version1.split(".");
    const v2 = version2.split(".");
    let index = 0;

    while (index < v1.length || index < v2.length) {
        let n1 = 0;
        let n2 = 0;

        if (index < v1.length) {
            n1 = parseInt(v1[index], 10);
        }
        if (index < v2.length) {
            n2 = parseInt(v2[index], 10);
        }
        if (n1 > n2) {
            return 1;
        }
        if (n1 < n2) {
            return -1;
        }
        index++;
    }

    return 0;
};
