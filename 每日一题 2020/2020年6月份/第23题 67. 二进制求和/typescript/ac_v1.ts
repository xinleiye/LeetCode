function addBinary(a: string, b: string): string {
    let res: string = "";
    let carry: number = 0;
    let indexA: number = a.length - 1;
    let indexB: number = b.length - 1;

    while (indexA >= 0 || indexB >= 0) {
        let sum: number;
        let numA: number = indexA >= 0 ? parseInt(a[indexA]) : 0;
        let numB: number = indexB >= 0 ? parseInt(b[indexB]) : 0;

        sum = numA + numB + carry;
        res = (sum & 1) + res;
        carry = (sum - sum % 2) / 2;
        indexA--;
        indexB--;
    }

    if (carry) {
        res = carry + res;
    }

    return res;
};
