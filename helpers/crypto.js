const crypto = require('crypto')
// const algorithm = 'zain scientist'
const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)

function encrypt (text) {
  const secret = 'zain scientist'
  const hash = crypto
    .createHmac('sha256', secret)
    .update('Zainulla is Scientist')
    .digest('hex')

  console.log(hash)
  return hash
  // const cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(key), iv);
  // let encrypted = cipher.update(text);
  // // encrypted=encrypted+cipher.final()
  // encrypted = Buffer.concat([encrypted, cipher.final()]);
  // // return { iv: iv.toString("hex"), encryptedData: encrypted.toString("hex") };
  // const iv = Buffer.from(iv.toString("hex"), "hex");
  // const encryptedText = Buffer.from(encrypted.toString("hex"), "hex");
  // const decipher = crypto.createDecipheriv("aes-256-cbc", Buffer.from(key), iv);
  // let decrypted = decipher.update(encryptedText);
  // decrypted = Buffer.concat([decrypted, decipher.final("hex")]);
  // return decrypted.toString();
}

function decrypt (text) {
  const iv = Buffer.from(text.iv, 'hex')
  const encryptedText = Buffer.from(text.encryptedData, 'hex')
  const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv)
  let decrypted = decipher.update(encryptedText)
  decrypted = Buffer.concat([decrypted, decipher.final('hex')])
  return decrypted.toString()
}

// var hw = encrypt("Some serious stuff");
// console.log(hw);
// console.log(decrypt(hw));
const obj = { encrypt, decrypt }
module.exports = obj
