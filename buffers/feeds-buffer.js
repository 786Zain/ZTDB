// // MODELS & MIDDLEWARES
// const HttpError = require('../models/error-model/runtime-error')
// const feedModels = require('../models/farm-models/feed-models')
// const userModels = require('../models/user-models/user-models')

// // preparing postFeed
// const feedBuffer = (req, userDetails, next) => {
//   const post = req.files
//   const caption = (req.body.caption) ? req.body.caption : null
//   const category = (req.body.category) ? req.body.category : null
//   const subCategory = (req.body.subCategory) ? req.body.subCategory : null
//   let privacyAllowance
//   let privacyState = false
//   const privacyFollowers = req.body.privacyAllowance

//   if (privacyFollowers) {
//     privacyState = true
//     privacyAllowance = userDetails.followers
//   }
//   if (req.body.privacyOnlyPeople) {
//     const privacyOnlyPeople = JSON.parse(req.body.privacyOnlyPeople)
//     privacyState = true
//     privacyAllowance = privacyOnlyPeople
//   }

//   const postData = {
//     caption: caption,
//     category: category,
//     subCategory: subCategory,
//     postPhoto: post,
//     privacyState: privacyState,
//     privacyAllowance: privacyAllowance
//   }

//   if (!postData) {
//     throw err
//   }
//   return postData
// }
// // storing Feed
// const feedDB = async (req, userDetails, next) => {
//   try {
//     let control = false
//     const postData = req
//     postData.profileId = userDetails._id // Doubt about Id reference secondary
//     postData.profilePic = userDetails.profilePic.length > 0 ? userDetails.profilePic[0].location : null
//     postData.userName = userDetails.userName
//     const findme = { _id: postData.subCategory }
//     // console.log("Posting Data", postData)
//     // var findSubCategory = await feedModels.Categories.updateOne(findme, { $inc: { "postCount": 1 } })
//     // if (!findSubCategory) {
//     //     throw err;
//     // }
//     // console.log(findSubCategory, postData);
//     const result = new feedModels.Posts(postData)
//     await result.save().then(async (data) => {
//       if (data) {
//         const category = await feedModels.Categories.findOneAndUpdate(
//           findme,
//           {
//             $addToSet: { Feeds: [data._id] },
//             $inc: { postCount: 1 }
//           },
//           {
//             upsert: true,
//             useFindAndModify: false,
//             returnOriginal: false
//           })
//         control = true
//       } else {
//         control = false
//       }
//     })
//       .catch(err => {
//         const error = new HttpError('Problem in Saving Feed' + err, 409)
//         return next(error)
//       })
//     return control
//   } catch (err) {
//     const error = new HttpError('Problem in FeedBuffer' + err, 206)
//     return next(error)
//   }
// }
// // preparing comment
// const commentBuffer = (req, user, next) => {
//   try {
//     const Id = req.params.postId
//     const commentData = {
//       type: 'comment',
//       postId: Id,
//       commentMessage: req.body.commentMessage,
//       userId: req.userData._id,
//       parent_id: Id,
//       userName: user.userName,
//       profilePic: user.profilePic.length > 0 ? user.profilePic[0].location : null
//     }
//     if (!commentData) {
//       throw err
//     }
//     return commentData
//   } catch (err) {
//     err = new HttpError('Problem in commenting data', 409)
//     return next(err)
//   }
// }
// // preparing reply
// const replyBuffer = (req, user, next) => {
//   try {
//     const replyData = {
//       type: req.body.replyTo ? 'nested reply' : 'reply',
//       commentId: req.params.comment_id,
//       commentMessage: req.body.replyMessage,
//       userId: req.userData._id,
//       parent_id: req.params.parent_id,
//       userName: user.userName,
//       profilePic: user.profilePic.length > 0 ? user.profilePic[0].location : null,
//       replyTo: req.body.replyTo ? req.body.replyTo : null
//     }

//     if (!replyData) {
//       throw err
//     }
//     return replyData
//   } catch (err) {
//     err = new HttpError('Problem in Replying data', 409)
//     return next(err)
//   }
// }
// // optional
// const nestedReplyBuffer = (req, userDetails, checkParentReply, next) => {
//   try {
//     const nestedReply = {
//       parentId: checkParentReply._id,
//       nestedReplyMessage: req.body.nestedReplyMessage,
//       nestedReplyUsername: userDetails.userName,
//       nestedProfilePic: userDetails.profilePic[0].location
//     }
//     if (!nestedReply) {
//       throw err
//     }
//     return nestedReply
//   } catch (err) {
//     err = new HttpError('Problem in Nested Reply Buffer' + err, 206)
//     return next(err)
//   }
// }
// // storing comment, replies & Nested Replies
// const commentDB = async (Result, next) => {
//   try {
//     let control = false
//     const result = new feedModels.Comments(Result)
//     await result.save().then((data) => { (data) ? control = true : control = false })
//       .catch(err => {
//         const error = new HttpError('Problem in Saving Feed', 409)
//         return next(error)
//       })
//     return control
//   } catch (err) {
//     const error = new HttpError('Problem in FeedBuffer', 206)
//     return next(error)
//   }
// }
// // check Feed
// const findPost = async (postId, next) => {
//   try {
//     const postFeed = await feedModels.Posts.findOneAndUpdate({ _id: postId }, { $inc: { commentCount: 1 } })
//     // postFeed.commentCount++;
//     if (!postFeed) {
//       throw err
//     }
//     return postFeed
//   } catch (err) {
//     const error = new HttpError('Problem in Finding Post' + err, 404)
//     return next(error)
//   }
// }
// // check comment
// const findComment = async (commentId, next) => {
//   try {
//     const commentDetails = await feedModels.Comments.findOne({ _id: commentId }, { $inc: { replyCount: 1 } })
//     if (!commentDetails) {
//       throw err
//     }
//     return commentDetails
//   } catch (err) {
//     const error = new HttpError('Problem in Finding Comment', 404)
//     return next(error)
//   }
// }
// // check Allowance to Restrict Reply
// const getAllowance = async (postId, id, next) => {
//   try {
//     const userAllowanceDetails = await feedModels.Posts.findOne({ _id: postId })
//     if (userAllowanceDetails.privacyState) {
//       for (const instance of userAllowanceDetails.privacyAllowance) {
//         if (id == instance) {
//           return true
//         }
//       }
//       return false
//     } else {
//       return true
//     }
//   } catch (err) {
//     const error = new HttpError('Post Privacy not set', 409)
//     return next(error)
//   }
// }
// // optional
// const findParentReply = async (replyId, next) => {
//   try {
//     const parentDetails = await feedModels.Replies.findOne({ _id: replyId })
//     if (!parentDetails) {
//       throw err
//     }
//     return parentDetails
//   } catch (err) {
//     err = new HttpError('Problem in Finding parentDetails', 204)
//     return next(err)
//   }
// }
// // optional Not Active
// const commentedUser = async (commentDetails, userDetails, next) => {
//   try {
//     const profilePic = await userModels.User.findOne({ _id: userDetails.userData._id })
//     if (!profilePic) {
//       err = new HttpError('Profile Not Setup, Cannot Reply', 401)
//       return next(err)
//     }
//     const replyData = {}
//     replyData.replyMessage = userDetails.body.replyMessage
//     replyData.commentId = userDetails.params.commentId
//     replyData.profilePic = profilePic.profilePic[0].location
//     replyData.userId = userDetails.userData._id
//     return replyData
//   } catch (err) {
//     err = new HttpError('Problem in Preparing Reply Data', 400)
//     return next(err)
//   }
// }
// // Liking Feed
// // const LikeMe = async (postFeed, LikingUser, next) => {
// //     try {

// //         let Like = await feedModels.Posts.findOneAndUpdate({ "_id": req.query.postId }, {
// //             $pull: { like: { $in: [LikingUser] } }
// //           }, {
// //             upsert: true,
// //             useFindAndModify: false,
// //             returnOriginal: false
// //           }).catch((err) => {
// //             const error = new HttpError(
// //               'Cannot unlike your Like, Try Later',
// //               403
// //             );
// //             return next(error);
// //           });
// //         let validate = false;
// //         let Like = await feedModels.Posts.findOneAndUpdate({ "_id": postFeed._id }, {
// //             $addToSet: { like: [LikingUser] }
// //         },
// //             {
// //                 upsert: true,
// //                 useFindAndModify: false,
// //                 returnOriginal: false
// //             }).catch((err) => {
// //                 const error = new HttpError(
// //                     'Cannot Commit your Like, Try Later',
// //                     403
// //                 );
// //                 return next(error);
// //             });
// //         validate = true;
// //         return validate;
// //     }
// //     catch (err) {
// //         err = new HttpError("Problem in increment like count", 204);
// //         return next(err);
// //     }
// // }

// const obj = {
//   feedBuffer, feedDB, commentBuffer, commentDB, findPost, findComment, commentedUser, replyBuffer, findParentReply, nestedReplyBuffer, getAllowance
//   // replyDB,nestedReplyStore,LikeMe,
// }

// module.exports = obj
// // EXTRAS
// // const replyDB = async (saveme, next) => {
// //     try {
// //         let control = false;
// //         let Data = saveme;
// //         const result = new feedModels.Replies(Data);
// //         await result.save().then((data) => { (data) ? control = true : control = false; })
// //             .catch(err => {
// //                 console.log("Error tracker", err);
// //                 err = new HttpError("Problem in Saving Reply", 409);
// //                 return next(error);
// //             });
// //         return control;
// //     }
// //     catch (err) {
// //         err = new HttpError("Problem in ReplyBuffer", 206);
// //         return next(error);
// //     }
// // }
// // const replyDB = async (Result, next) => {
// //     try {
// //         let control = false;
// //         const result = new feedModels.Replies(Result);
// //         await result.save().then((data) => { (data) ? control = true : control = false; })
// //             .catch(err => {
// //                 const error = new HttpError("Problem in Saving Feed Reply", 409);
// //                 return next(error);
// //             });
// //         return control;
// //     }
// //     catch (err) {
// //         const error = new HttpError("Problem in ReplyBuffer", 206);
// //         return next(error);
// //     }
// // }

// // const nestedReplyStore = async (nestedReply, next) => {
// //     try {
// //         let control = false;
// //         let findme = { "_id": nestedReply.parentId };
// //         let storeme = { $set: { hasNested: nestedReply } };
// //         let nestedResult = await feedModels.Replies.updateOne(findme, storeme).then(async (data) => {
// //             (data) ? control = true : control = false;
// //         }).catch((err) => {
// //             const error = new HttpError("Problem in Saving Nested Reply", 409);
// //             return next(error);
// //         });
// //         return control;
// //     }
// //     catch (err) {
// //         const error = new HttpError("Problem in Nested Reply Store"+err, 206);
// //         return next(error);
// //     }
// // }
