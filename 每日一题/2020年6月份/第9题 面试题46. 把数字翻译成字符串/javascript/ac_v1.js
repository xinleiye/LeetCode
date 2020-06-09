/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
    let varIndex = 0;
    let varMap = new Map();
    let varMatrix;
    let varNum;
    let notEquals= [];

    equations.forEach(item => {
        if (!varMap.has(item[0])) {
            varMap.set(item[0], varIndex++);
        }
        if (!varMap.has(item[3])) {
            varMap.set(item[3], varIndex++);
        }
    });

    varNum = varMap.size;
    varMatrix = new Array(varMap.size);
    for (let i = 0; i < varNum; i++) {
        varMatrix[i] = new Array(varNum).fill(false);
    }

    for (let i = 0; i < equations.length; i++) {
        let row = varMap.get(equations[i][0]);
        let col = varMap.get(equations[i][3]);
        let operator = equations[i][1];

        if (operator === "=") {
            varMatrix[row][col] = true;
            varMatrix[col][row] = true;
        } else if (operator === "!") {
            notEquals.push(i);
        }
    }

    for (let k = 0; k < varNum; k++) {
        for (let i = 0; i < varNum; i++) {
            for (let j = 0; j < varNum; j++) {
                let ik = varMatrix[i][k];
                let kj = varMatrix[k][j];

                if (!varMatrix[i][j] && (i !== j) && (i !== k) && (k !== j)) {
                    varMatrix[i][j] = ik && kj;
                    varMatrix[j][i] = ik && kj;
                }
            }
        }
    }

    for (let i = 0; i < notEquals.length; i++) {
        let row = varMap.get(equations[notEquals[i]][0]);
        let col = varMap.get(equations[notEquals[i]][3]);

        if (row === col || varMatrix[row][col]) {
            return false;
        }
    }

    return true;
};
