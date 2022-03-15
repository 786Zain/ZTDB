// EXTRA CODE
// //check OTP SMS & E-mail
// const checkOTPCode = async (req, res, next) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             let query;
//             req.body.email ? query = { email: req.body.email } : query = { mobileNumber: req.body.mobileNumber }
//             let existingUser = await userModels.User.findOne(query);
//             if (!existingUser) {
//                 reject({ message: 'OTP Unauthoritized' });
//                 return;
//             }
//             let verified = OTP.check(existingUser.otp, req.body.otp);
//             if (verified) {
//                 resolve({ message: "OTP Verified" });
//                 return;
//             }
//         }
//         catch (err) {
//             const error = new HttpError(
//                 "Checking OTP Failed!",
//                 400
//             );
//             return next(error);
//         }
//     })
// }

// //resend OTP
// const resendOTPCode = async (req, next) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             let resending;
//             let user = await userModels.User.findOne({ "_id": req.body._id });
//             if (!user) {
//                 reject({ message: 'User Not Found, Register Again' });
//                 return;
//             }
//             if (user.email) {
//                 resending = await OTP.resend(user.email, next);
//             }
//             else if (user.mobileNumber) {
//                 resending = await OTP.resendSMS(user.mobileNumber, next);
//             }
//             if (resending) {
//                 resolve({ message: "OTP Sent" });
//                 return;
//             }
//             else {
//                 reject({ message: 'User Data Invalid' });
//                 return;
//             }
//         }
//         catch (err) {
//             const error = new HttpError(err, 400);
//             return next(error);
//         }
//     });
// }

// //Complete SignUp
// const finishSignupPage = async (req, next) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             let Updating
//             let query;
//             req.body.email ? query = { email: req.body.email } : query = { mobileNumber: req.body.mobileNumber }
//             let existingUser = await userModels.User.findOne(query);
//             if (!existingUser) {
//                 reject({ message: 'User Not Found, Register Again' });
//                 return;
//             }
//             existingUserName = await userModels.User.findOne({ "userName": req.body.userName });
//             if (existingUserName) {
//                 reject({ message: 'User name Already exist!' });
//                 return;
//             }
//             let user = await userModels.User.findOne({ "_id": existingUser._id });
//             req.body.password = await bcrypt.hash(req.body.password, 12);
//             if (user.email) {
//                 let findme = { "email": user.email }
//                 Updating = await OTP.signup(findme, req.body);
//             }
//             else if (user.mobileNumber) {
//                 let findme = { "mobileNumber": user.mobileNumber }
//                 Updating = await OTP.signup(findme, req.body);
//             }
//             if (Updating) {
//                 resolve({ message: "Signup successful" });
//                 return;
//             }
//             else {
//                 reject({ message: 'Signup Incomplete' });
//                 return;
//             }
//         }
//         catch (err) {
//             const error = new HttpError("Issue on Update Profile", 400);
//             return next(error);
//         }
//     });
// }

// //Get user for admin
// const manageUsersPage = async (req, res, next) => {
//     return new Promise(async (resolve, reject) => {
//         let Result = await userModels.User.find({});
//         (Result) ? resolve({ message: "User Accounts", data: Result }) : reject({ message: 'Permission error, Unable to access user accounts' });
//     })
// }

// //Forgot Password Check
// const forgotPasswordPage = async (req, res, next) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             let resetting, query;
//             req.body.email ? query = { email: req.body.email } : query = { mobileNumber: req.body.mobileNumber }
//             let user = await userModels.User.findOne(query);
//             if (!user) {
//                 reject({ message: 'User Not Found, Register Again' });
//                 return;
//             }
//             if (user.email) {
//                 resetting = await OTP.getpasswordOTP({ email: user.email });
//                 resetting ? resolve({ message: `Password reset mail sent to ${user.email}` }) : reject({ message: 'Password not changed!' });
//             }
//             else if (user.mobileNumber) {
//                 resetting = await OTP.getpasswordSMSOTP({ mobileNumber: user.mobileNumber });
//                 resetting ? resolve({ message: `Password reset SMS sent to ${user.mobileNumber}` }) : reject({ message: 'Password not changed!' });
//             }
//         }
//         catch (err) {
//             const error = new HttpError("Issue in Controller", 400);
//             return next(error);
//         }
//     });
// }

// //Setting New Password
// const setNewPasswordPage = async (req, res, next) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             let query;
//             req.body.email ? query = { email: req.body.email } : query = { mobileNumber: req.body.mobileNumber }
//             let user = await userModels.User.findOne(query);
//             let resetting;
//             if (!user) {
//                 reject({ message: 'User Not Found, Register Again' });
//                 return;
//             }
//             let valid = await OTP.check(user.otp, req.body.otp)
//             if (valid) {
//                 let password = await bcrypt.hash(req.body.newPassword, 12);
//                 resetting = await OTP.resetPassword(user._id, password);
//                 resetting ? resolve({ message: "Password Reset Successful" }) : reject({ message: 'Password Not Changed!' });
//             } else {
//                 reject({ message: 'Invalid OTP' });
//             }
//         }
//         catch (err) {
//             const error = new HttpError(err, 400);
//             return next(error);
//         }
//     });
// }

// //Adding Profile details
// const profileSetupPage = async (req, next) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             let existUser = await userModels.User.findOne({ "_id": req.headers.user });
//             if (!existUser) {
//                 reject({ message: 'User Not Found, Register Again' });
//                 return;
//             }
//             if (req.query.profileSetup) {
//                 let profile = await PROFILE.profileSetupSkip(req.query.profileSetup, existUser, next);
//                 (profile) ? resolve({ message: 'Profile Setup Skipped!' }) : reject({ message: 'Profile Already Skipped!' });
//                 return;
//             }
//             if (!req.file) {
//                 reject({ message: 'File Not Found!' });
//                 return;
//             }
//             if (existUser.competition) {
//                 reject({ message: 'Profile Created, go for edit profile' });
//                 return;
//             }
//             let profile = await PROFILE.profileSetup(existUser, req.file);
//             if (profile) {
//                 resolve({ message: "Profile Setup Initiated" });
//             }
//             else {
//                 reject({ message: 'Profile Setup Incomplete!' });
//             }
//         }
//         catch (err) {
//             const error = new HttpError("User Data doesn't Exist!" + err, 400);
//             return next(error);
//         }
//     });
// }

// //Updating Profile details
// const editProfileSetupPage = async (req, next) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             let id = mongoose.Types.ObjectId(req.userData._id);
//             let findme = { "_id": id }
//             let storeme = { $set: { "profilePic.0": req.file } }
//             let updating = await userModels.User.findOneAndUpdate(findme, storeme, {
//                 upsert: true,
//                 useFindAndModify: false,
//                 returnOriginal: false
//             })
//                 .then((data) => {
//                     (data) ? resolve({ message: "New Profile Pic uploaded", data: req.file }) : reject({ message: "New Profile Pic Not Uploaded", data: req.file });
//                 }).catch((err) => {
//                     throw err;
//                 });
//         }
//         catch (err) {
//             const error = new HttpError("Profile Not Updated in db" + err, 400);
//             return next(error);
//         }
//     });
// }
// //Adding Cover Picture
// const coverSetupPage = async (req, next) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             if (!req.file) {
//                 reject({ message: 'File Not Found!' });
//                 return;
//             }
//             let findme = { "_id": req.userData._id }
//             let storeme = { $set: { "profilePic.1": req.file } }
//             let updating = await userModels.User.findOneAndUpdate(findme, storeme, {
//                 upsert: true,
//                 useFindAndModify: false,
//                 returnOriginal: false
//             })
//             resolve({ message: "SuccessFully Cover Picture Added" });
//         }
//         catch (err) {
//             const error = new HttpError("cannot add Cover details!" + err, 409);
//             return next(error);
//         }
//     });
// }
// //Updating Cover Picture details
// const editCoverSetupPage = async (req, next) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             let id = mongoose.Types.ObjectId(req.userData._id);
//             let findme = { "_id": id }
//             let storeme = { $set: { "profilePic.1": req.file } }
//             let updating = await userModels.User.findOneAndUpdate(findme, storeme, {
//                 upsert: true,
//                 useFindAndModify: false,
//                 returnOriginal: false
//             })
//                 .then((data) => {
//                     (data) ? resolve({ message: "New Cover Pic uploaded", data: req.file }) : reject({ message: "New Cover Pic Not Uploaded", data: req.file });
//                 }).catch((err) => {
//                     throw err;
//                 });
//         }
//         catch (err) {
//             const error = new HttpError("Cover Picture Not Updated in db" + err, 400);
//             return next(error);
//         }
//     });
// }
// // Second Page of profile details
// const updateProfileSetupPage = async (req, res, next) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             let existMail = await userModels.User.findOne({ "_id": req.params.user });
//             if (!existMail) {
//                 reject({ message: 'User Not Found, Signup first' });
//                 return;
//             }
//             let profile = PROFILE.updateProfileSetup(req);
//             if (profile) {
//                 resolve({ message: "Profile Setup Complete" });
//             }
//             else {
//                 reject({ message: 'Profile Setup Incomplete!' });
//             }
//         }
//         catch (err) {
//             const error = new HttpError(err, 400);
//             return next(error);
//         }
//     });
// }
// //getProfile of User
// const getProfileById = async (req, res, next) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             let existUser = await userModels.User.findOne({ "_id": req.query.userId });
//             if (!existUser) {
//                 reject({ message: 'No Profile Found' });
//                 return;
//             }
//             resolve({ message: "Profile Got", data: existUser });
//         } catch (err) {
//             reject({ message: "Can't retrive profile details" });
//             return;
//         }
//     });
// }

// //Check Multer Functionality
// const uploadProfilePicSetupPage = async (req, res, next) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             resolve({ message: "profile pic uploaded" });
//         } catch (err) {
//             reject({ message: "Cannot come back" });
//             return;
//         }
//     });
// }

// // Follow up users
// const Follow = async (req, res, next) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             if (req.body.userId == req.userData._id) {
//                 throw err;
//             }
//             if (req.body.unFollow) {
//                 const follower = await userModels.User.findOneAndUpdate(
//                     { _id: req.body.userId },
//                     {
//                         $pull: { followers: { $in: [req.userData._id] } }
//                     },
//                     {
//                         upsert: true,
//                         useFindAndModify: false,
//                         returnOriginal: false
//                     }
//                 ).catch((err) => {
//                     const error = new HttpError(
//                         'Removing Follower Problem.',
//                         406
//                     )
//                 });
//                 const following = await userModels.User.findOneAndUpdate(
//                     { _id: req.userData._id },
//                     {
//                         $pull: { following: { $in: [req.body.userId] } }
//                     },
//                     {
//                         upsert: true,
//                         useFindAndModify: false,
//                         returnOriginal: false
//                     }
//                 ).catch((err) => {
//                     const error = new HttpError(
//                         'Removing Followee Problem.',
//                         409
//                     )
//                 });
//                 resolve({ message: "User UnFollowed Successfully" })
//             } else {
//                 const follower = await userModels.User.findOneAndUpdate(
//                     { _id: req.body.userId },
//                     {
//                         $addToSet: { followers: [req.userData._id] }
//                     },
//                     {
//                         upsert: true,
//                         useFindAndModify: false,
//                         returnOriginal: false
//                     }
//                 ).catch((err) => {
//                     const error = new HttpError(
//                         'Adding Follower Problem.',
//                         406
//                     )
//                 });
//                 const following = await userModels.User.findOneAndUpdate(
//                     { _id: req.userData._id },
//                     {
//                         $addToSet: { following: [req.body.userId] }
//                     },
//                     {
//                         upsert: true,
//                         useFindAndModify: false,
//                         returnOriginal: false
//                     }
//                 ).catch((err) => {
//                     const error = new HttpError(
//                         'Adding Followee Problem.',
//                         409
//                     )
//                 });
//                 resolve({ message: "User Followed Successfully" })
//             }
//         }
//         catch (err) {
//             reject({ message: "Cannot Follow user" });
//         }
//     });
// }

// //TECHINICAL CHECKS API
// const TestErrorsPage = async (req, res, next) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             // resolve({ message: "Success" });
//             throw err;
//         } catch (err) {
//             reject({ message: "denaid" });
//         }
//     });
// }
// const deleteProfilePicSetupPage = async (req, res, next) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             s3.deleteObject({
//                 Bucket: bucket,
//                 Key: req.body.key
//             }, (err, data) => {
//                 (err) ? reject({ message: "cannot delete" }) : resolve({ message: "File Deleted" });
//             })
//         } catch (err) {
//             reject({ message: "denaid" });
//             return;
//         }
//     });
// }
// const TestMiddlewarePage = async (req, res, next) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             // fetchContent(req.url, (err, content) => {
//             //   if (err) return next(err)
//             //   res.send({data: content, url: req.url, ts: timestamp()})
//             //   next()
//             // })
//             //Use of Bulk
//             // let removeme={$pull:{profilePic:{$position:0}}}
//             // let bulk = userModels.User.collection.initializeOrderedBulkOp();
//             // bulk.find(findme).updateOne(storeme)
//             // // bulk.find.upsert(findme).update({$unset : {"profilePic.0": 1 }}).update({$pull : {"profilePic.0" : null}}).update(storeme)
//             // bulk.execute().then((data) => {
//             //     (data) ? resolve({ message: "New Profile Pic uploaded", data: req.file }) : reject({ message: "New Profile Pic Not Uploaded", data: req.file });
//             // }).catch((err) => {
//             //     throw err;
//             // });
//             resolve({ message: "Middleware Generated" });
//         }
//         catch (err) {
//             reject({ message: "Middleware Denaid" });
//             return;
//         }
//     });
// }
// exports.checkOTP = checkOTPCode;
// exports.resendOTP = resendOTPCode;
// exports.finishSignup = finishSignupPage;
// exports.manageUsers = manageUsersPage;
// exports.forgotPassword = forgotPasswordPage;
// exports.setNewPassword = setNewPasswordPage;
// exports.profileSetup = profileSetupPage;
// exports.coverSetup = coverSetupPage;
// exports.editProfileSetup = editProfileSetupPage;
// exports.editCoverSetup = editCoverSetupPage;
// exports.updateProfileSetup = updateProfileSetupPage;
// exports.uploadProfilePicSetup = uploadProfilePicSetupPage;
// exports.TestErrors = TestErrorsPage;
// exports.TestMiddleware = TestMiddlewarePage;
// exports.deleteProfilePicSetup = deleteProfilePicSetupPage;
// exports.FollowUsers = Follow;
// exports.getProfile = getProfileById;

// EXTRA CODE
// //List all files of Digital Ocean
// router.get("/listFiles",
//     (req, res) => {
//         multerMiddleware.listFiles(req, res, err => {
//             err
//                 ? res.status(500).send({ message: err.message })
//                 : res.status(201).send({ fileUrl: req.file });
//         })
//     });
// //Check Error Middleware Handler
// router.get("/TestErrors",
//     (req, res, next) => {
//         userController.TestErrors(req).then((data) => {
//             res.status(201).send(data);
//         }).catch((error) => {
//             error = new HttpError(
//                 "I am Error Handler ",
//                 500
//             );
//             return next(error);
//         })
//     });
// //Get key of Media upload to Digital Ocean
// router.get("/findKey",
//     (req, res, next) => {
//         multerMiddleware.findKey(req, next).then((data) => {
//             res.status(201).send(data);
//         }).catch((err) => {
//             const error = new HttpError(
//                 err.message,
//                 406
//             );
//             return next(error);
//         })
//     });
// //Check Multiple Request Middleware
// router.get("/Middleware",
//     (req, res, next) => {
//         multipleClientRequests.confirmRequest(req).then((data) => {
//             res.status(201).send(data);
//         }).catch((error) => {
//             error = new HttpError(
//                 "I am Multiple Request Handler ",
//                 500
//             );
//             return next(error);
//         })
//     });
// //profile Page
// router.get("/getprofile", auth,
//     (req, res, next) => {
//         userController.getProfile(req).then((data) => {
//             res.status(201).send(data);
//         }).catch((error) => {
//             error = new HttpError(
//                 "Retrive Profile Failed",
//                 500
//             );
//             return next(error);
//         })
//     });

// router.post("/checkOTP",
//     (req, res) => {
//         userController.checkOTP(req).then((data) => {
//             res.status(201).send(data);
//         }).catch((err) => {
//             res.status(500).send(err);
//         })
//     });
// router.post("/resendOTP",
//     (req, res, next) => {
//         userController.resendOTP(req, next).then((data) => {
//             res.status(201).send(data);
//         }).catch((err) => {
//             error = new HttpError(
//                 "Technical Issue",
//                 406
//             );
//             return next(error);
//         })
//     });
// router.post("/forgotPassword",
//     (req, res, next) => {
//         userController.forgotPassword(req, next).then((data) => {
//             res.status(201).send(data);
//         }).catch((err) => {
//             error = new HttpError(
//                 err.message,
//                 406
//             );
//             return next(error);
//         })
//     });
// router.post("/profileSetup", multerMiddleware.upload,
//     (req, res, next) => {
//         userController.profileSetup(req, next).then((data) => {
//             res.status(201).send(data);
//         }).catch((err) => {
//             err = new HttpError(
//                 err.message,
//                 err.statusCode
//             );
//             return next(err);
//         })
//     });
// router.post("/coverSetup", auth,
//     multerMiddleware.uploadCover,
//     (req, res, next) => {
//         userController.coverSetup(req, next).then((data) => {
//             res.status(201).send(data);
//         }).catch((err) => {
//             const error = new HttpError(
//                 err.message,
//                 err.statusCode
//             );
//             return next(error);
//         })
//     });
// router.post("/follow", auth, (req, res, next) => {
//     userController.FollowUsers(req, next).then((data) => {
//         res.status(201).send(data);
//     }).catch((err) => {
//         error = new HttpError(
//             "User cannot follow own profile",
//             406
//         );
//         return next(error);
//     })
// });
// router.post("/uploadProfilePic",
//     (req, res) => {
//         multerMiddleware.upload(req, res, err => {
//             err
//                 ? res.status(500).send({ message: err.message })
//                 : res.status(201).send({ message: "File Uploaded", fileUrl: req.file });
//         })
//     });

// PUT API GATEWAYS

// router.put("/editProfileSetup", auth, multerMiddleware.editProfile, multerMiddleware.userChecks,
//     (req, res, next) => {
//         userController.editProfileSetup(req, next).then((data) => {
//             res.status(201).send(data);
//         }).catch((err) => {
//             err = new HttpError(
//                 err.message,
//                 err.statusCode
//             );
//             return next(err);
//         })
//     });
// router.put("/editCoverSetup", auth, multerMiddleware.editCover, multerMiddleware.checkCover,
//     (req, res, next) => {
//         userController.editCoverSetup(req, next).then((data) => {
//             res.status(201).send(data);
//         }).catch((err) => {
//             err = new HttpError(
//                 err.message,
//                 err.statusCode
//             );
//             return next(err);
//         })
//     });
// router.put("/updateProfileSetup/:user",
//     (req, res, next) => {
//         userController.updateProfileSetup(req, next).then((data) => {
//             res.status(201).send(data);
//         }).catch((err) => {
//             error = new HttpError(
//                 err.message,
//                 406
//             );
//             return next(error);
//         })
//     });
// router.put("/editUserContent/:user", auth,
//     (req, res, next) => {
//         userController.updateProfileSetup(req, next).then((data) => {
//             res.status(201).send(data);
//         }).catch((err) => {
//             error = new HttpError(
//                 err.message,
//                 406
//             );
//             return next(error);
//         })
//     });
// router.put("/setNewPassword",
//     (req, res, next) => {
//         userController.setNewPassword(req, next).then((data) => {
//             res.status(201).send(data);
//         }).catch((err) => {
//             error = new HttpError(
//                 err.message,
//                 406
//             );
//             return next(error);
//         })
//     });

// router.put("/finishSignup",
//     (req, res, next) => {
//         userController.finishSignup(req, next).then((data) => {
//             res.status(201).send(data);
//         }).catch((err) => {
//             error = new HttpError(
//                 err.message,
//                 406
//             );
//             return next(error);
//         })
//     });

// // DELETE API GATEWAYS

// router.delete("/deletePic",
//     (req, res, next) => {
//         userController.deleteProfilePicSetup(req).then((data) => {
//             res.status(201).send(data);
//         }).catch((error) => {
//             error.status = '400';
//             error = new HttpError(
//                 "Unable to delete file",
//                 400
//             );
//             return next(error);
//         })
//     });
// router.delete("/delAll",
//     (req, res, next) => {
//         multerMiddleware.delFiles(req).then((data) => {
//             res.status(201).send({ message: "Files Deleted", Files: data });
//         }).catch((error) => {
//             error.status = '400';
//             error = new HttpError(
//                 "Unable to delete file",
//                 400
//             );
//             return next(error);
//         })
//     });

// //PACKAGES
// const env = require('dotenv').config({ path: __dirname + '/.env' })
// const { ObjectID } = require('mongodb');

// //MODELS
// const feedModels = require("../models/farm-models/feed-models");
// const userModels = require("../models/user-models/user-models");
// const FEED = require("../buffers/feeds-buffer");
// const mongoose = require('mongoose');

// //MIDDLEWARES
// const HttpError = require("../models/error-model/runtime-error");

// const welcome = async (req, res) => {
//   res.status(200).json({ message: "Zain Technology API Ready" });

// }

// //API's
// const postFeed = async (req, next) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       let userDetails = await userModels.User.findOne({ "_id": req.userData._id });
//       for (item in req.files) {
//         if (req.files[item].location.startsWith("fra1.digitaloceanspaces.com")) {
//           req.files[item].location = "https://" + req.files[item].location
//           // console.log("Files", req.files[item].location)
//         }
//       }
//       if (!userDetails) {
//         const error = new HttpError(
//           "Profile Not Setup, Cannot Add Feeds!",
//           403
//         );
//         return next(error);
//       }
//       else if (userDetails.profileSetup) {
//         const error = new HttpError(
//           "Profile Setup not completed, Cannot Add Feeds!",
//           403
//         );
//         return next(error);
//       }

//       let Result = FEED.feedBuffer(req, userDetails, next);
//       let saved = await FEED.feedDB(Result, userDetails, next);

//       if (saved) {
//         resolve({ message: "Feed Posted" });
//       }
//       else {
//         reject({ message: 'Feed cannot be Posted' });
//       }
//     }
//     catch (err) {
//       const error = new HttpError(
//         "Posting Failed! " + err,
//         400
//       );
//       return next(error);
//     }

//   });
// };

// // Commenting to posts
// const postComment = async (req, next) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       let checkPost = FEED.findPost(req.params.postId, next);
//       let userDetails = await userModels.User.findOne({ "_id": req.userData._id });
//       if (!userDetails) {
//         const error = new HttpError(
//           "User Profile Not Found!",
//           403
//         );
//         return next(error);
//       }
//       else if (userDetails.profileSetup) {
//         const error = new HttpError(
//           "User Profile Not Completed, Cannot Comment Feeds!",
//           403
//         );
//         return next(error);
//       }
//       let Result = FEED.commentBuffer(req, userDetails, next);
//       let saved = await FEED.commentDB(Result, next);
//       if (saved) {
//         resolve({ message: "Feed Commented" });
//       }
//       else {
//         reject({ message: 'Feed cannot be Posted' });
//       }
//     } catch (err) {
//       const error = new HttpError(
//         "Commenting Failed!",
//         400
//       );
//       return next(error);
//     }
//   });
// };

// // Replying to comments
// const postReply = async (req, next) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       let checkComment = FEED.findComment(req.params.comment_id, next);
//       let checkAllowance = await FEED.getAllowance(req.params.parent_id, req.userData._id, next);
//       let userDetails = await userModels.User.findOne({ "_id": req.userData._id });
//       if (!userDetails) {
//         const error = new HttpError(
//           "User Profile Not Found!",
//           403
//         );
//         return next(error);
//       }
//       else if (userDetails.profileSetup) {
//         const error = new HttpError(
//           "User Profile Not Completed, Cannot reply Feeds!",
//           403
//         );
//         return next(error);
//       }
//       else if (!checkAllowance) {
//         const error = new HttpError(
//           "User Not Allowed to Reply!",
//           403
//         );
//         return next(error);
//       }
//       let Result = FEED.replyBuffer(req, userDetails, next);

//       let saved = await FEED.commentDB(Result, next);

//       if (saved) {
//         resolve({ message: "Feed Replied" });
//       }
//       else {
//         reject({ message: 'Feed cannot be Replied' });
//       }
//     } catch (err) {
//       const error = new HttpError(
//         "Replying Failed!" + err,
//         400
//       );
//       return next(error);
//     }
//   });
// };

// //Get All Posts
// const getFeeds = async (req, next) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       var page = req.query.pages;
//       var limit = (page - 1) * req.query.limit;
//       if (req.params.permission == 'Public') {
//         var Result = await feedModels.Posts.find({}).skip((page - 1) * limit).limit(limit * 1).sort({ "createdAt": -1 });
//         (Result == null) ? reject({ message: 'Permission error, Unable to access post accounts' }) : resolve({ message: "All Posts Accounts", data: Result });
//       }
//       if (req.params.permission == 'Private') {
//         var id = mongoose.Types.ObjectId(req.query.userId)
//         if (req.query.category) {
//           var Result = await feedModels.Posts.find({ "profileId": id, "category": req.query.category }).skip((page - 1) * limit).limit(limit * 1).sort({ "createdAt": -1 });
//           (Result == null && Result.isEmpty()) ? reject({ message: 'Permission error, Unable to access post accounts' }) : resolve({ message: "Got user Posts", data: Result })
//         }
//         //Under Build to list out Feeds by tags
//         if (req.query.subCategory) {
//           var Result = await feedModels.Posts.find({ "profileId": id, "subCategory": req.query.subCategory }).skip((page - 1) * limit).limit(limit * 1).sort({ "createdAt": -1 });
//           (Result == null && Result.isEmpty()) ? reject({ message: 'Permission error, Unable to access post accounts' }) : resolve({ message: "Got user Posts", data: Result })
//         }
//         if (!req.query.userId) {
//           var Result = await feedModels.Posts.find({ "profileId": req.userData._id }).skip((page - 1) * limit).limit(limit * 1).sort({ "createdAt": -1 });
//           (Result == null && Result.isEmpty()) ? reject({ message: 'Permission error, Unable to access post accounts' }) : resolve({ message: "Got user Posts", data: Result })
//         }
//         var Result = await feedModels.Posts.find({ "profileId": id }).skip((page - 1) * limit).limit(limit * 1).sort({ "createdAt": -1 });
//         (Result == null && Result == []) ? reject({ message: 'Permission error, Unable to access post accounts' }) : resolve({ message: "Got user Posts", data: Result })
//       }
//     } catch (err) {
//       const error = new HttpError(
//         "Getting Posts Failed!" + err,
//         400
//       );
//       return next(error);
//     }
//   });
// }

// //Get only Specific Posts
// const getFeedById = async (req, next) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       var Result = await feedModels.Posts.findById(req.query.postId);
//       if (Result == null) { throw err }
//       resolve({ message: "Feed Got", data: Result });
//     } catch (err) {
//       const error = new HttpError(
//         "Getting Posts Failed!",
//         400
//       );
//       return next(error);
//     }
//   });
// }

// //Get Categories
// const getCategories = async (req, next) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       //filter Categories and tags
//       var Result;
//       if (req.query.tags) {
//         if (req.query.mainCategory == null) {
//           Result = [];
//           resolve({ message: "No Main Category Exists!", data: Result });
//         }
//         var getCategories = (req.query.tags == "true") ? await feedModels.Categories.find({ "mainCategory": req.query.mainCategory }, { "_id": 1, "subCategoryName": 1, "postCount": 1 }) : await feedModels.Categories.find({ "isMainCategory": true }, { "_id": 1, "categoryName": 1, "isMainCategory": 1 })
//         if (getCategories.length == 0) {
//           Result = [];
//           resolve({ message: "No Sub Categories Exists!", data: Result });
//         }
//         Result = getCategories;
//       }
//       else {
//         var getCompleteCategories = await feedModels.Categories.find({})
//         if (getCompleteCategories.length == 0) {
//           Result = [];
//           resolve({ message: "No Categories Created!", data: Result });
//         }
//         Result = getCompleteCategories;
//       }
//       resolve({ message: "Getting Categories", data: Result });
//     } catch (err) {
//       const error = new HttpError(
//         "Internal Server Error",
//         500
//       );
//       return next(error);
//     }
//   });
// }

// // Add Categories and sub categories
// const addCategory = async (req, next) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       //data buffering
//       let { categoryName, subCategory, mainCategory } = req.body
//       if (categoryName) {
//         let postData = {
//           categoryName: categoryName,
//           isMainCategory: true,
//           mainCategory: null
//         };
//         let saving = new feedModels.Categories(postData)
//         var Result = await saving.save(postData)
//         if (Result == null) { throw err }
//       }
//       else {
//         let checkme = { "subCategoryName": subCategory }
//         var checking = await feedModels.Categories.find(checkme)
//         if (checking.length != 0) {
//           const error = new HttpError(
//             "Sub Category already exists!",
//             406
//           );
//           return next(error);
//         }
//         let postData = {
//           subCategoryName: subCategory,
//           isMainCategory: false,
//           mainCategory: mainCategory
//         };
//         let saving = new feedModels.Categories(postData)
//         var Result = await saving.save(postData)
//         if (saving == null) { throw err }
//       }
//       resolve({ message: "Categories Added" });
//     } catch (err) {
//       const error = new HttpError(
//         "Categories or Sub Categories can't Add!" + err,
//         400
//       );
//       return next(error);
//     }
//   });
// }

// //Get User Liked Posts
// const getUserLikes = async (req, next) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       var Result = (req.query.category) ? await feedModels.Posts.find({ "like": req.userData._id, "category": req.query.category }) : await feedModels.Posts.find({ "like": req.userData._id })
//       if (Result == null) { throw err }
//       resolve({ message: "Got User Liked Posts", data: Result });
//     } catch (err) {
//       const error = new HttpError(
//         "Getting User Liked Posts Failed!",
//         400
//       );
//       return next(error);
//     }
//   });
// }

// //Get User Posts of Media Exist
// const getUserMedia = async (req, next) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       var Result =
//         (req.query.category) ?
//           await feedModels.Posts.find({ "profileId": req.userData._id, "postPhoto": { $gt: [] }, "category": req.query.category }) :
//           await feedModels.Posts.find({ "profileId": req.userData._id, "postPhoto": { $gt: [] } })
//       if (Result == null) { throw err }
//       resolve({ message: "Got Data", data: Result });
//     } catch (err) {
//       const error = new HttpError(
//         "Getting User Posts of Media Exist Failed!" + err,
//         400
//       );
//       return next(error);
//     }
//   });
// }

// //Get Shareable Feed Link
// const shareFeed = async (req, next) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const frontEndUrl = process.env.FRONTENDURL;
//       let link = "http://localhost:5000/feed/getBookmarkFeeds?postId=" + req.query.postId;
//       resolve({ "Shareable Link: ": link });
//     } catch (err) {
//       const error = new HttpError(
//         "Unable to Create Feed Link!",
//         400
//       );
//       return next(error);
//     }
//   });
// }

// // Search Funtionality for users
// const filterUser = async (req, next) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       // console.log(req.query.username)
//       // if (!req.query.username) {
//       //   resolve({
//       //     message: 'Enter userName', data: users
//       //   })
//       // }
//       const users = await userModels.User.find({
//         userName: {
//           $regex: new RegExp('^' + req.query.username.toLowerCase(), 'i')
//         }
//       }, { "profilePic.location": 1, "_id": 1, "userName": 1 }
//       );
//       if (users.length == 0) {
//         resolve({
//           message: 'UserName Not Found', data: users
//         })
//       } else {
//         resolve({ message: 'All Users Are Retrived', data: users });
//       }
//       // // const p = posts.flatMap((p) => [...p]);
//     } catch (err) {
//       const error = new HttpError('Getting User Profile Failed!', 406);
//       return next(error);
//     }
//   });
// };

// // Search Funtionality
// const filterFeed = async (req, next) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const posts = await feedModels.Posts.find({
//         userName: {
//           $regex: new RegExp('^' + req.params.username.toLowerCase(), 'i')
//         }
//       });
//       // const p = posts.flatMap((p) => [...p]);
//       posts == null
//         ? reject({
//           message: 'Permission error, Unable to access feeds'
//         })
//         : resolve({ message: 'All Feeds Are Retrived', data: posts });
//       return;
//     } catch (err) {
//       const error = new HttpError('Getting Feed Failed!', 204);
//       return next(error);
//     }
//   });
// };

// //BookMarks
// const saveBookmark = async (req, next) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       if (!req.body.postId) {
//         const error = new HttpError('Please send post id', 422);
//         return next(error);
//       }
//       const postId = req.body.postId;
//       const userId = req.userData._id;
//       const frontEndUrl = process.env.FRONTENDURL;
//       let link = `${postId}`;
//       const data = await userModels.User.findOneAndUpdate(
//         { _id: userId },
//         {
//           $addToSet: { bookMarks: [link] }
//         },
//         {
//           upsert: true,
//           useFindAndModify: false,
//           returnOriginal: false
//         }
//       ).catch((err) => {
//         const error = new HttpError(
//           'Creating a new bookmark failed, please try again later.',
//           403
//         );
//         return next(error);
//       });
//       resolve({ message: 'Save Bookmark Successfully', data: data });
//       return;
//     } catch (err) {
//       const error = new HttpError('Saving Post Failed!', 400);
//       return next(error);
//     }
//   });
// };

// //Liking feeds
// const likeFeed = async (req, next) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       var status = false;
//       let LikingUser = req.userData._id;
//       //checking post
//       let postFeed = await feedModels.Posts.findOne({ "_id": req.query.postId });
//       console.log(postFeed);
//       if (!postFeed) {
//         throw err;
//       }

//       // prohibit user from liking his own post
//       if (postFeed.userId == LikingUser) {
//         reject({ message: 'Posted user cannot Like' });
//         return;
//       }
//       req.query.unlike == "true" ? status = true : status = false;
//       console.log(req.query.unlike)
//       if (status) {
//         let unLike = await feedModels.Posts.findOneAndUpdate({ "_id": req.query.postId }, {
//           $pull: { like: { $in: [LikingUser] } }
//         }, {
//           upsert: true,
//           useFindAndModify: false,
//           returnOriginal: false
//         }).catch((err) => {
//           const error = new HttpError(
//             'Cannot unlike your Like, Try Later',
//             403
//           );
//           return next(error);
//         });
//         resolve({ message: 'Post unLiked' });
//         return;
//       }
//       else {
//         console.log(req.query.unlike)
//         let Like = await feedModels.Posts.findOneAndUpdate({ "_id": req.query.postId }, {
//           $addToSet: { like: [LikingUser] }
//         }, {
//           upsert: true,
//           useFindAndModify: false,
//           returnOriginal: false
//         }).catch((err) => {
//           const error = new HttpError(
//             'Cannot like your Feed, Try Later',
//             403
//           );
//           return next(error);
//         });
//         // let Like = await FEED.LikeMe(postFeed, LikingUser, next);
//         resolve({ message: "Feed Liked" });
//       }
//     } catch (err) {
//       const error = new HttpError(
//         "Unable to like Feed" + err,
//         400
//       );
//       return next(error);
//     }
//   });
// }

// //Discovery Sub Category Page
// const discoverSubCategoryPage = async (req, next) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       var page = req.query.pages;
//       var limit = 10;
//       var data = {};
//       data.categoryList = await feedModels.Categories.find({ "isMainCategory": true }, { "categoryName": 1 });

//       for (category in data.categoryList) {
//         data[data.categoryList[category].categoryName] = await feedModels.Posts.find({ "category": data.categoryList[category]._id }).skip((page - 1) * limit).sort({ "createdAt": -1 }).limit(10);
//       }
//       resolve({ message: "Resulting ", data: data });
//     } catch (err) {
//       const error = new HttpError(
//         "Getting Issues " + err,
//         400
//       );
//       return next(error);
//     }
//   });
// }

// //Discover Page
// const discoverHomePage = async (req, next) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       var data = {};
//       data.categoryList = await feedModels.Categories.find({ "isMainCategory": true }, { "categoryName": 1 });
//       // data.descOrder = await feedModels.Categories.aggregate([
//       //   {
//       //     '$match': {
//       //       'isMainCategory': false
//       //     }
//       //   }, {
//       //     '$project': {
//       //       'mainCategory': 1,
//       //       'Feeds': 1,
//       //       'postCount': 1
//       //     }
//       //   }, {
//       //     '$group': {
//       //       '_id': '$mainCategory',
//       //       'postCount': {
//       //         '$sum': '$postCount'
//       //       }
//       //     }
//       //   }, {
//       //     '$sort': {
//       //       'postCount': -1
//       //     }
//       //   }, {
//       //     '$lookup': {
//       //       'from': 'posts',
//       //       'localField': '_id',
//       //       'foreignField': 'category',
//       //       'as': 'Feeds'
//       //     }
//       //   },
//       //   {
//       //     '$limit':{"$Feeds":10}
//       //   }
//       //   }, ])

//       // data.descOrder = await feedModels.Categories.find({ "isMainCategory": false }, { "mainCategory": 1, "Feeds": 1, "postCount": 1 }).sort({ "postCount": -1 })
//       // if (data.categoryList.length == 0 || data.descOrder.length == 0) {
//       //   data = {};
//       //   resolve({ message: "Can't fetch categories or no categories", data: data });
//       // }
//       // for (entry in data.descOrder) {
//       //   var getFeeds = await feedModels.Posts.find({
//       //     "_id": {
//       //       $in: data.descOrder[entry].Feeds
//       //     }
//       //   }, { "_id": 1, "profilePic": 1, "userName": 1, "caption": 1, "postPhoto.location": 1 }
//       //   ).sort({ "createdAt": -1 }).limit(10);
//       //   data.descOrder[entry].Feeds = getFeeds;
//       // }
//       resolve({ message: "Discovery Feeds", data: data });
//     } catch (err) {
//       const error = new HttpError(
//         "Getting Issues " + err,
//         400
//       );
//       return next(error);
//     }
//   });
// }

// // Under Build
// const getComments = async (req, next) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const postId = req.params.postId;
//       var page = req.query.pages;
//       var limit = (page - 1) * req.query.limit;
//       let result = await feedModels.Comments.find({ postId: postId }).skip((page - 1) * limit).limit(limit * 1).sort({ "createdAt": -1 });
//       if (result && result.length > 0) {
//         resolve({ message: "All Comments of a Post Retrived", data: result })
//       } else if (result && result.length === 0) {
//         reject({ message: 'There are no comments for this post' })
//       } else {
//         reject({ message: 'Unable to access comments of a posted Feed' })
//       }
//     } catch (err) {
//       const error = new HttpError(
//         "Getting Comments Failed!",
//         400
//       );
//       return next(error);
//     }
//   });
// }

// // Under Build
// const getReplies = async (req, next) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const commentId = req.params.comment_id;
//       var page = req.query.pages;
//       var limit = (page - 1) * req.query.limit;
//       let result = await feedModels.Comments.find({ "commentId": commentId }).skip((page - 1) * limit).limit(limit * 1).sort({ "createdAt": -1 });;
//       if (result && result.length > 0) {
//         resolve({ message: "All the replies of the comment retrieved", data: result })
//       } else if (result && result.length === 0) {
//         reject({ message: 'There are no replies for this comment' })
//       } else {
//         reject({ message: 'Unable to access replies of a commented post Feed' })
//       }
//     } catch (err) {
//       const error = new HttpError(
//         "Getting Replies Failed!",
//         400
//       );
//       return next(error);
//     }
//   });
// }

// //Logic Creation
// const Logic = async (req, next) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       var data = {};
//       data.categoryList = await feedModels.Categories.find({ "isMainCategory": true }, { "categoryName": 1 });
//       data.descOrder = await feedModels.Categories.find({ "isMainCategory": false }, { "mainCategory": 1, "Feeds": 1, "postCount": 1 }).sort({ "postCount": -1 })
//       for (entry in data.descOrder) {
//         for (categoryName in data.categoryList) {
//           if (JSON.stringify(data.categoryList[categoryName]._id) == JSON.stringify(data.descOrder[entry].mainCategory)) {
//             // data.descOrder[entry].mainCategory = JSON.stringify(data.categoryList[categoryName]._id);
//             // data.descOrder[entry].mainCategory = null;
//             data.descOrder[entry].mainCategory.push("zain")
//             console.log("Changing", data.descOrder[entry].mainCategory, JSON.stringify(data.categoryList[categoryName].categoryName))
//           }
//         }
//         var getFeeds = await feedModels.Posts.find({
//           "_id": {
//             $in: data.descOrder[entry].Feeds
//           }
//         }
//         )
//         data.descOrder[entry].Feeds = getFeeds;

//       }
//       resolve({ message: "Resulting ", data: data });
//     } catch (err) {
//       const error = new HttpError(
//         "Getting Issues " + err,
//         400
//       );
//       return next(error);
//     }
//   });
// }

// const obj = {
//   welcome, postFeed, getFeeds, postComment, getComments, getReplies, shareFeed,
//   filterFeed, saveBookmark, getFeedById, likeFeed, postReply, getUserLikes, getUserMedia, addCategory, getCategories, Logic, discoverHomePage, discoverSubCategoryPage, filterUser
//   // postNestedReply  replyFeeds
// };

// module.exports = obj;

// //Extras

// // console.log(data.descOrder);
// // console.log("Comparing", data.categoryList[categoryName]._id, data.descOrder[entry].mainCategory);
// // console.log(typeof data.descOrder[entry].mainCategory, typeof data.categoryList[categoryName]._id);
// // console.log(compare(data.descOrder[entry].mainCategory, data.categoryList[categoryName]._id));
// // console.log(data.descOrder[entry].mainCategory);
// // console.log(data.categoryList[categoryName]._id);
// // for (categoryName in data.categoryList) {
// //   data.descOrder[entry].mainCategory = "data";
// //   if (data.descOrder[entry].mainCategory == data.categoryList[categoryName]._id) {
// //     data.descOrder[entry].mainCategory = 'data';
// //     console.log(data.descOrder[entry].mainCategory, data.categoryList[categoryName].categoryName);
// //   }
// // }

// //const replyFeeds = async (req, next) => {
//   //   return new Promise(async (resolve, reject) => {
//   //     try {
//   //       let checkComment = FEED.findComment(req.params.commentId, next);
//   //       let replyDetails = await FEED.commentedUser(checkComment, req, next);
//   //       let saveReply = FEED.replyDB(replyDetails, next);
//   //       if (saveReply) {
//   //         resolve({ message: "Comment Replied" });
//   //       }
//   //       else {
//   //         reject({ message: 'Comment cannot be Replied' });
//   //       }
//   //     } catch (err) {
//   //       const error = new HttpError(
//   //         "Replying Failed!",
//   //         400
//   //       );
//   //       return next(error);
//   //     }

//   //     // try {
//   //     //   if (!req.file) {
//   //     //     const error = new HttpError(
//   //     //       "Post Media Not Found!",
//   //     //       204
//   //     //     );
//   //     //     return next(error);
//   //     //   }
//   //     //   let profilePic = await userModels.Profile.findOne({ "email": req.userData.email });
//   //     //   if (!profilePic) {
//   //     //     const error = new HttpError(
//   //     //       "Profile Not Setup, Cannot Add Feeds!",
//   //     //       403
//   //     //     );
//   //     //     return next(error);
//   //     //   }
//   //     //   let Result = FEED.feedBuffer(req, next);

//   //     //   let saved = await FEED.feedDB(Result, profilePic, next);

//   //     //   if (saved) {
//   //     //     resolve({ message: "Feed Posted" });
//   //     //   }
//   //     //   else {
//   //     //     reject({ message: 'Feed cannot be Posted' });
//   //     //   }
//   //     // } catch (err) {
//   //     //   const error = new HttpError(
//   //     //     "Posting Failed!",
//   //     //     400
//   //     //   );
//   //     //   return next(error);
//   //     // }
//   //   });
//   // };

// // const getShareFeeds = async (req, next) => {
// //   return new Promise(async (resolve, reject) => {
// //     try {
// //       var Result = await feedModels.Posts.findById(req.query.postId);
// //       if (Result == null) { throw err }
// //       resolve({ message: "Feed Got", data: Result });
// //     } catch (err) {
// //       const error = new HttpError(
// //         "Getting Posts Failed!",
// //         400
// //       );
// //       return next(error);
// //     }
// //   });
// // }

// // const postNestedReply = async (req, next) => {
// //   return new Promise(async (resolve, reject) => {
// //     try {
// //       let checkParentReply = await FEED.findParentReply(req.params.replyId, next);
// //       let userDetails = await userModels.User.findOne({ "_id": req.userData._id });
// //       if (!checkParentReply) throw err;
// //       if (!userDetails.userName || userDetails.profileSetup) {
// //         reject({ message: 'Parent Reply Not Exist or User Profile Setup not Completed, Cannot Add Reply!' });
// //         return;
// //       }
// //       let Result = FEED.nestedReplyBuffer(req, userDetails, checkParentReply, next);
// //       // let saved = await FEED.nestedReplyStore(Result, next);
// //       // if (saved) {
// //       //   resolve({ message: "Nested Reply Successful" });
// //       // }
// //       // else {
// //       //   reject({ message: 'Cannot Reply to Parent Reply' });
// //       // }
// //     } catch (err) {
// //       const error = new HttpError(
// //         "Nested Replying Failed!" + err,
// //         400
// //       );
// //       return next(error);
// //     }
// //   });
// // };
