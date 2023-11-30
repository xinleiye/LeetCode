/**
 * @param {string} text
 * @return {string}
 */
var entityParser = function(text) {
    let res = [];
    let pos = 0;
    const length = text.length;
    while (pos < length) {
        if (text[pos] !== "&") {
            res.push(text[pos]);
            pos++;
            continue;
        }

        let str = "&";
        pos++;
        while (pos < length && text[pos] !== ";") {
            if (text[pos] === "&") {
                res.push(str);
                str = "&";
                pos++;
                continue;
            }
            str += text[pos];
            pos++;
        }
        if (pos < length) {
            str += text[pos];
            pos++;
        }
        switch (str) {
            case "&amp;":
                res.push("&");
                break;
            case "&quot;":
                res.push("\"");
                break;
            case "&apos;":
                res.push("'");
                break;
            case "&gt;":
                res.push(">");
                break;
            case "&lt;":
                res.push("<");
                break;
            case "&frasl;":
                res.push("/");
                break;
            default:
                res.push(str);
                break;
        }
    }

    return res.join("");
};
