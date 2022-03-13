/**
 * @param {number} n
 * @param {number[][]} artifacts
 * @param {number[][]} dig
 * @return {number}
 */
var digArtifacts = function(n, artifacts, dig) {
    let res = 0;
    const digMap = new Array(n).fill(0).map(() => new Array(n).fill(false));

    dig.forEach(d => {
        digMap[d[0]][d[1]] = true;
    });
    artifacts.forEach(a => {
        let got = true;

        for(let i = a[0]; i <= a[2]; i++) {
            for (let j = a[1]; j <= a[3]; j++) {
                if (!digMap[i][j]) {
                    got = false;
                    break;
                }
            }
            if (!got) {
                break;
            }
        }
        if(got) {
            res++;
        }
    });

    return res;
};
