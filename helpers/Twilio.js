// const SMSOTP = function (message, mobile) {
//   console.log('SMS Script executing')
//   let callback = false
//   const accountSid = process.env.TWILIO_ACCOUNT_SID
//   const authToken = process.env.TWILIO_AUTH_TOKEN
//   const fromNumber = process.env.FROMNUMBER
//   const toNumber = process.env.TONUMBER
//   const client = require('twilio')(accountSid, authToken)

//   client.messages
//     .create({
//       body: message,
//       from: fromNumber,
//       to: mobile
//     })
//     .then(message => {
//       console.log(message.sid)
//       if (message.sid) {
//         callback = true
//       }
//     }).done()

//   console.log(callback)
//   callback = true
//   return callback
// }
// exports.MobileOTP = SMSOTP
