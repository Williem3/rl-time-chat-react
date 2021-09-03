let aes256 = require("aes256");

let secretKey = 'vTe4ywBWf4LEYJSsePvXZv4XH';

export const toEncrypt = (text) => {
    let encrypted = aes256.encrypt(secretKey, text);
    return encrypted;
}

export const toDecrypt = (cipher, username) => {
    if (cipher.startsWith("Welcome")) {
        return cipher;
    }

    if(cipher.startsWith(username)) {
        return cipher;
    }

    let decrypted = aes256.decrypt(secretKey, cipher);
    return decrypted;
}