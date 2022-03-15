// const aws = require('aws-sdk')
// const multer = require('multer')
// const multerS3 = require('multer-s3')
// const bucket = process.env.BUCKET
// const userModels = require('../models/user-models/user-models')

// const s3 = new aws.S3({
//   secretAccessKey: process.env.OCEAN_SECRET_KEY,
//   accessKeyId: process.env.OCEAN_ACCESS_KEY,
//   endpoint: new aws.Endpoint(process.env.OCEAN_ENDPT)
// })

// const extensions = {
//   image: ['jpeg', 'png', 'gif', 'tiff', 'bmp', 'webp', 'jpg', 'heic', 'HEIC', 'JPEG', 'PNG', 'GIF', 'TIFF', 'BMP', 'WEBP', 'JPG', 'PSD', 'SGI', 'TGA', 'OpenEXR', 'psd', 'sgi', 'tga', 'openexr'],
//   video: [
//     'webm',
//     'mpeg4',
//     '3gpp',
//     'mov',
//     'avi',
//     'mpeg',
//     'mpegps',
//     'wmv',
//     'flv',
//     'ogg',
//     'm4v',
//     'mts/m2ts', 'mts', 'm2ts', 'mxf',
//     'MOV',
//     'WEBM',
//     'MPEG4',
//     '3GPP',
//     'MOV',
//     'AVI',
//     'MPEG',
//     'MPEGPS',
//     'WMV',
//     'FLV',
//     'OGG',
//     'MP4',
//     'M4V',
//     'MTS/M2TS', 'MTS', 'M2TS', 'MXF'
//   ],
//   audio: ['mp3', 'm4a', 'wav', 'ogg', 'mp4'],
//   text: ['txt'],
//   Markup: ['css', 'html'],
//   archive: ['zip', 'rar', 'tar', 'gzip'],
//   code: ['php', 'c', 'CPP', 'H', 'HPP', 'JS', 'PY'],
//   others: [
//     'doc',
//     'docx',
//     'xls',
//     'xlsx',
//     'ppt',
//     'pptx',
//     'pdf',
//     'pages',
//     'ai',
//     'psd',
//     'dfg',
//     'svg',
//     'ttf'
//   ]
// }

// const allFormats = () => {
//   let exts = []
//   Object.values(extensions).forEach((item) => {
//     exts = [...exts, ...item]
//   })
//   return exts
// }
// const fileFilter = async (req, file, callback) => {
//   const exts = allFormats()
//   if (
//     exts.some((ext) => file.originalname.endsWith('.' + ext)) ||
//     file.originalname.endsWith('.' + String(ext).toLowerCase())
//   ) {
//     return callback(null, true)
//   }
//   // if the file type is not of expected type create an error and throw back
//   return callback(new Error('Only ' + extensions.join() + 'files are allowed'))
// }

// const postFilter = async (req, file, callback) => {
//   const profilePic = await userModels.User.findOne({ _id: req.userData._id })
//   if (!profilePic) {
//     return callback(new Error('Profile Not Setup, Cannot Add Feeds!'))
//   }

//   if (profilePic.profileSetup) {
//     return callback(new Error('Profile Setup Not Completed, Cannot Add Feeds!'))
//   }
//   return callback()
// }
// const authorizedKey = (req, file, cb) => {
//   const user = req.userData._id
//   const temp = Date.now() + '_' + Math.random().toString(36).substr(2, 9)
//   cb(null, user + '/feeds/' + temp + '_' + file.originalname)
// }

// // Posting Feed
// const uploadPost = multer({
//   fileFilter,
//   storage: multerS3({
//     acl: 'public-read',
//     s3,
//     bucket: bucket,
//     key: authorizedKey
//   })
// }).array('post', 10)

// const listFiles = async (req, res) => {
//   const result = await s3.listObjectsV2({
//     Bucket: bucket
//   }).promise()
//   res.status(200).send({ message: 'Listed all Uploaded Documents', data: result })
// }

// const obj = {
//   listFiles, uploadPost, postFilter
// }

// module.exports = obj
