/*************************

Use: "SGVsbG8gV29ybGQh".decrypt()
=> "Hello World!"
**************************/


String.prototype.decrypt = function() {
    let s = this // creates a mutable value
    const base64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    // remove/ignore any characters not in the base64 characters list
    //  or the pad character -- particularly newlines
    s = s.replace(new RegExp(`[^${base64chars}=]`, "g"), "");

    // replace any incoming padding with a zero pad (the "A" character is zero)
    const p = (s.charAt(s.length - 1) == "=" ?
        (s.charAt(s.length - 2) == "=" ? "AA" : "A") : "");
    let r = "";
    s = s.substr(0, s.length - p.length) + p;

    // increment over the length of this encoded string, four characters at a time
    for (let c = 0; c < s.length; c += 4) {

        // each of these four characters represents a 6-bit index in the base64 characters list
        //  which, when concatenated, will give the 24-bit number for the original 3 characters
        const n = (base64chars.indexOf(s.charAt(c)) << 18) + (base64chars.indexOf(s.charAt(c + 1)) << 12) +
            (base64chars.indexOf(s.charAt(c + 2)) << 6) + base64chars.indexOf(s.charAt(c + 3));

        // split the 24-bit number into the original three 8-bit (ASCII) characters
        r += String.fromCharCode((n >>> 16) & 255, (n >>> 8) & 255, n & 255);
    }
    // remove any zero pad that was added to make this a multiple of 24 bits
    return r.substring(0, r.length - p.length);
}

module.exports = text => text.decrypt()
