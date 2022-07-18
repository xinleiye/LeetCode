/**
 * @param {number[][]} isInfected
 * @return {number}
 */
var containVirus = function(isInfected) {
    let res = 0;
    const maxRow = isInfected.length;
    const maxCol = isInfected[0].length;
    const invalidPos = (row, col) => row < 0 || row >= maxRow || col < 0 || col >= maxCol;
    const dir = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const dfsSearch = (row, col, buff, visitSet, protected) => {
        if (visitSet.has(`${row}#${col}`) || protected[row][col]) {
            return;
        }
        visitSet.add(`${row}#${col}`);
        for (const [r, c] of dir) {
            const aRow = row + r;
            const aCol = col + c;

            if (invalidPos(aRow, aCol) || visitSet.has(`${aRow}#${aCol}`) || isInfected[aRow][aCol] === 0) {
                continue;
            }
            dfsSearch(aRow, aCol, buff, visitSet, protected);
        }
        buff.push([row, col]);
    };
    const preInfect = (virus, buff) => {
        let fireWall = 0;
        const infectSet = new Set();

        for (const [row, col] of virus) {
            for (const [r, c] of dir) {
                const aRow = row + r;
                const aCol = col + c;

                if (!invalidPos(aRow, aCol) && isInfected[aRow][aCol] === 0) {
                    if (!infectSet.has(`${aRow}#${aCol}`)) {
                        infectSet.add(`${aRow}#${aCol}`);
                        buff.push([aRow, aCol]);
                    }
                    fireWall++;
                }
            }
        }

        return fireWall;
    };
    const protected = new Array(maxRow).fill(0).map(() => new Array(maxCol).fill(false));

    while (true) {
        const viruses = [];
        const infects = [];
        const visitSet = new Set();
        let maxInfect = 0;
        let maxFireWall = 0;
        let maxInfectVirus = [];

        for (let i = 0; i < maxRow; i++) {
            for (let j = 0; j < maxCol; j++) {
                const buff = [];

                if (isInfected[i][j] === 1 && !protected[i][j] && !visitSet.has(`${i}#${j}`)) {
                    dfsSearch(i, j, buff, visitSet, protected);
                    viruses.push(buff);
                }
            }
        }

        if (!viruses.length) {
            break;
        }
        for (const v of viruses) {
            const buff = [];
            const fireWall = preInfect(v, buff);

            if (buff.length > maxInfect) {
                maxInfect = buff.length;
                maxFireWall = fireWall;
                maxInfectVirus = v;
            }
            infects.push(buff);
        }
        if (maxInfect === 0) {
            break;
        }
        res += maxFireWall;
        for (const [r, c] of maxInfectVirus) {
            protected[r][c] = true;
        }
        infects.sort((i1, i2) => i2.length - i1.length);
        for (let i = 1; i < infects.length; i++) {
            for (const [r, c] of infects[i]) {
                isInfected[r][c] = 1;
            }
        }
    }

    return res;
};
