/*************************

Use: "Hello World!".encrypt()
=> "SGVsbG8gV29ybGQh"
**************************/


String.prototype.encrypt = function() {
	let s = this // creates a mutable value
    // the result/encoded string, the padding string, and the pad count
    const base64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    let r = "";
    let p = "";
    let c = s.length % 3;

    // add a right zero pad to make this string a multiple of 3 characters
    if (c > 0) {
        for (; c < 3; c++) {
            p += "=";
            s += "\0";
        }
    }
    // increment over the length of the string, three characters at a time
    for (c = 0; c < s.length; c += 3) {
        // we add newlines after every 76 output characters, according to the MIME specs
        if (c > 0 && (c / 3 * 4) % 76 == 0) {
            r += "\r\n";
        }
        // these three 8-bit (ASCII) characters become one 24-bit number
        let n = (s.charCodeAt(c) << 16) + (s.charCodeAt(c + 1) << 8) + s.charCodeAt(c + 2);
        // this 24-bit number gets separated into four 6-bit numbers
        n = [(n >>> 18) & 63, (n >>> 12) & 63, (n >>> 6) & 63, n & 63];
        // those four 6-bit numbers are used as indices into the base64 character list
        r += base64chars[n[0]] + base64chars[n[1]] + base64chars[n[2]] + base64chars[n[3]];
    }
    // add the actual padding string, after removing the zero pad
    return r.substring(0, r.length - p.length) + p;
}

module.exports = text => text.encrypt()
