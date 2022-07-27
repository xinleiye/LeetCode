/**
 * @param {string} expression
 * @return {string}
 */
 var fractionAddition = function(expression) {
    let index = 0;
    const length = expression.length;
    const cur = new Fraction(0, 1);
    const gcd = (num1, num2) => {
        let num;

        while (num2 > 0) {
            num = num1 % num2;
            num1 = num2;
            num2 = num;
        }

        return num1;
    };
    const parseExpression = (exp, pos) => {
        let len = 0;
        const sign = exp[pos] === "-" ? -1 : 1;
        const length = exp.length;
        const e = [];

        if (exp[pos] === "-" || exp[pos] === "+") {
            pos++;
            len++;
        }
        while (pos < length && exp[pos] !== "-" && exp[pos] !== "+") {
            e.push(exp[pos]);
            pos++;
            len++;
        }

        const f = e.join("").split("/");

        return {
            length: len,
            next: new Fraction(sign * Number(f[0]), Number(f[1]))
        };
    };
    const addFraction = (f1, f2) => {
        let sign = 1;
        let n = f1.numerator * f2.denominator + f2.numerator * f1.denominator;
        const d = f1.denominator * f2.denominator;

        if (n < 0) {
            sign = -1;
            n = 0 - n;
        }
        const g = gcd(n, d);

        return new Fraction(sign * n / g, d / g);
    };

    while (index < length) {
        const { length, next } = parseExpression(expression, index);
        const sum = addFraction(cur, next);

        cur.numerator = sum.numerator;
        cur.denominator = sum.denominator;
        index += length;
    }

    return cur.toString();
};

class Fraction {
    constructor (numerator, denominator) {
        this.numerator = numerator;
        this.denominator = denominator;
    }
    toString () {
        return `${this.numerator.toString()}/${this.denominator.toString()}`;
    }
}
