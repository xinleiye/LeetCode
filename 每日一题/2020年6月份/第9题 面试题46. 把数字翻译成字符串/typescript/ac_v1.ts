function translateNum(num: number): number {
    let preOne: number = 1;
    let preTwo: number = 1;
    let cur: number = 1;
    let numChar: string[] = num.toString().split("");

    for (let i = 1; i < numChar.length; i++) {
        let subStr: string = numChar[i - 1] + numChar[i];

        cur = preOne;
        if (subStr >= "10" && subStr <= "25") {
            cur += preTwo;
        }
        preTwo = preOne;
        preOne = cur;
    }

    return cur;
};
