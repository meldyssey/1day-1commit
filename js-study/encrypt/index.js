const CryptoJS = require("crypto-js");

var param = "TEST50";
var key = "TXRZ3jThBP2dWnUN";
var iv = "2Mr9ca8KFEdAFGua";

key = CryptoJS.enc.Utf8.parse(key);
iv = CryptoJS.enc.Utf8.parse(iv);
param = CryptoJS.enc.Utf8.parse(param);
var encrypted = CryptoJS.AES.encrypt(param, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
}).toString();
console.log(encrypted);

var decrypted = CryptoJS.AES.decrypt(encrypted, key, {
    iv: iv,
}).toString(CryptoJS.enc.Utf8);
console.log(decrypted);
