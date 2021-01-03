/**
 * @param {string} text
 * @return {string}
 */
var entityParser = function(text) {
    let res = "";
    let replaceStr = "";
    let start = false;

    for (let i = 0; i < text.length; i++) {
        
        if (text[i] === "&") {
            replaceStr = "&";
            start = true;
            continue;
        }
        if (start) {
            replaceStr += text[i];
            if (text[i] === ";") {
                switch (replaceStr) {
                    case "&amp;":
                        res += "&";
                        break;
                    case "&quot;":
                        res += "\"";
                        break;
                    case "&apos;":
                        res += "'";
                        break;
                    case "&gt;":
                        res += ">";
                        break;
                    case "&lt;":
                        res += "<";
                        break;
                    case "&frasl;":
                        res += "/";
                        break;
                    default:
                        res += replaceStr;
                        break;
                }
                start = false;
            }
        } else {
            res += text[i];
        }

    }
    
    return res;
};
