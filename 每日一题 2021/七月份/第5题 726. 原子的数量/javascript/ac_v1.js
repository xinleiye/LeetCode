/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function(formula) {
    const length = formula.length;
    const buff = [];
    let index = 0;

    while (index < length) {
        if (formula[index] === "(") {
            if (buff.length && buff[buff.length - 1] !== "(" && isNaN(buff[buff.length - 1])) {
                buff.push(1);
            }
            buff.push(formula[index]);
            index++;
        } else if (isUpperCase(formula[index])){
            let ele = formula[index];

            if (buff.length && buff[buff.length - 1] !== "(" && isNaN(buff[buff.length - 1])) {
                buff.push(1);
            }
            index++;
            while (index < length  && isLowerCase(formula[index])) {
                ele += formula[index];
                index++;
            }
            buff.push(ele);
        } else if (isDigital(formula[index])) {
            let num = getDigital(formula, index);

            buff.push(parseInt(num, 10));
            index += num.length;
        } else if (formula[index] === ")") {
            if (buff.length && isNaN(buff[buff.length - 1])) {
                buff.push(1);
            }

            let i = buff.length - 1;

            index++;
            if (isDigital(formula[index])) {
                const count = getDigital(formula, index);
                const num = parseInt(count, 10);

                while (buff[i] !== "(") {
                    if (!isNaN(buff[i])) {
                        buff[i] *= num;
                    }
                    i--;
                }
                index += count.length;
            } else {
                while (buff[i] !== "(") {
                    i--;
                }
            }
            buff.splice(i, 1);
        }
    }
    if (isNaN(buff[buff.length - 1])) {
        buff.push(1);
    }

    return getResult(buff).join("");
};

function isLowerCase (ch) {
    return ch >= "a" && ch <= "z";
}

function isUpperCase (ch) {
    return ch >= "A" && ch <= "Z";
}

function isDigital (ch) {
    return ch >= "0" && ch <= "9";
}

function getEle (str, index) {
    const length = str.length;
    let ele = formula[index];

    index++;
    while (index < length  && isLowerCase(formula[index])) {
        ele += formula[index];
        index++;
    }
    
    return ele;
}

function getDigital (str, index) {
    let num = str[index];
    const length = str.length;

    index++;
    while (index < length && isDigital(str[index])) {
        num += str[index];
        index++;
    }

    return num;
}

function getResult (arr) {
    let eleMap = new Map();
    let length = arr.length;
    let index = 0;
    let eleArr = [];

    while (index < length) {
        if (eleMap.has(arr[index])) {
            eleMap.set(arr[index], eleMap.get(arr[index]) + arr[index + 1]);
        } else {
            eleMap.set(arr[index], arr[index + 1]);
        }
        index += 2;
    }

    eleMap.forEach((val, key) => {
        eleArr.push({
            ele: key,
            num: val
        });
    });
    eleArr.sort((item1, item2) => {
        if (item1.ele < item2.ele) {
            return -1;
        } else if (item1.ele > item2.ele) {
            return 1;
        } else {
            return 0;
        }
    });

    return eleArr.map(item => {
        if (item.num === 1) {
            return item.ele;
        } else {
            return item.ele + item.num;
        }
    });
}
