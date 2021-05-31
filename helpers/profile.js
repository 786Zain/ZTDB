// const env = require('custom-env').env()
// const userModel = require('../models/user-models/user-models')
// const HttpError = require('../models/error-model/runtime-error')
// async function saveProfile (user, file) {
//   let control = false
//   if (file.location.startsWith('fra1.digitaloceanspaces.com')) {
//     file.location = 'https://' + file.location
//   }
//   const data = {
//     profileSetup: false,
//     'profilePic.0': file
//   }
//   const findme = { _id: user._id }
//   const result = await userModel.User.updateOne(findme, { $set: data }).then(async (data) => {
//     (data) ? control = true : control = false
//   }).catch((err) => { new Error(err); control = false })
//   return control
// }

// async function profileSetupSkipPage (skip, user, next) {
//   try {
//     let control = false
//     const findme = { _id: user._id }
//     // let existUser = await userModel.Profile.findOne({ "userId": user._userId });
//     // let existUser = await userModel.Profile.findOne({ "userId": user._userId });
//     if (!user.profileSetup) {
//       throw err
//     }
//     const data = {}
//     // data.userId = user._userId;
//     // data.userDetails = user.userDetails;
//     data.profileSetup = skip == 'true'
//     const result = await userModel.User.updateOne(findme, data).then(async (data) => {
//       (data) ? control = true : control = false
//     }).catch((err) => { control = false })
//     // const result = new userModel.User(data);
//     // await result.save().then((data) => { (data) ? control = true : control = false; });
//     return control
//   } catch (err) {
//     err = new HttpError('Profile Already Created!', 208)
//     return next(err)
//   }
// }
// async function updateProfile (data) {
//   let control = false
//   data.body.profileSetup = false
//   const findme = { _id: data.params.user }
//   const storeme = { $set: data.body }
//   const result = await userModel.User.updateOne(findme, storeme).then(async (data) => {
//     (data) ? control = true : control = false
//   }).catch((err) => { control = false })
//   return control
// }

// exports.profileSetup = saveProfile
// exports.updateProfileSetup = updateProfile
// exports.profileSetupSkip = profileSetupSkipPage
