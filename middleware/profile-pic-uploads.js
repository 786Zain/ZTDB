// PACKAGES
const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

// MODELS
const userModels = require("../models/user-models/user-models");

// CONST VALUES

// MIDDLEWARES
const HttpError = require("../models/error-model/runtime-error");

// API's

// Extension Checks
const extensions = {
  image: [
    "jpeg",
    "png",
    "gif",
    "tiff",
    "bmp",
    "webp",
    "jpg",
    "heic",
    "HEIC",
    "JPEG",
    "PNG",
    "GIF",
    "TIFF",
    "BMP",
    "WEBP",
    "JPG",
    "PSD",
    "SGI",
    "TGA",
    "OpenEXR",
    "psd",
    "sgi",
    "tga",
    "openexr",
  ],
  video: [
    "webm",
    "mpeg4",
    "3gpp",
    "mov",
    "avi",
    "mpeg",
    "mpegps",
    "wmv",
    "flv",
    "ogg",
    "m4v",
    "mts/m2ts",
    "mts",
    "m2ts",
    "mxf",
    "MOV",
    "WEBM",
    "MPEG4",
    "3GPP",
    "MOV",
    "AVI",
    "MPEG",
    "MPEGPS",
    "WMV",
    "FLV",
    "OGG",
    "MP4",
    "M4V",
    "MTS/M2TS",
    "MTS",
    "M2TS",
    "MXF",
  ],
  audio: ["mp3", "m4a", "wav", "ogg", "mp4"],
  text: ["txt"],
  Markup: ["css", "html"],
  archive: ["zip", "rar", "tar", "gzip"],
  code: ["php", "c", "CPP", "H", "HPP", "JS", "PY"],
  others: [
    "doc",
    "docx",
    "xls",
    "xlsx",
    "ppt",
    "pptx",
    "pdf",
    "pages",
    "ai",
    "psd",
    "dfg",
    "svg",
    "ttf",
  ],
};

// Allowed Formats
const allFormats = () => {
  let exts = [];
  Object.values(extensions).forEach((item) => {
    exts = [...exts, ...item];
  });
  return exts;
};
const fileFilter = async (req, file, callback) => {
  // if (req.headers.user) {
  //   const existMail = await userModels.User.findOne({ _id: req.headers.user })
  //   if (!existMail) {
  //     return callback(new Error('User Not Found, Signup first'))
  //   }
  //   // if (existMail.profileSetup) {
  //   //   return callback(new Error('Profile Already Initialized!'))
  //   // }
  // }
  const exts = allFormats();
  if (
    exts.some((ext) => file.originalname.endsWith("." + ext)) ||
    file.originalname.endsWith("." + String(ext).toLowerCase())
  ) {
    return callback(null, true);
  }
  // if the file type is not of expected type create an error and throw back
  return callback(new Error("Only " + extensions.join() + "files are allowed"));
};

// Partition for profile pic
const authorizedKey = (req, file, cb) => {
  const user = req.userData._id;
  const temp = Date.now() + "_" + Math.random().toString(36).substr(2, 9);
  cb(null, user + "/" + temp + "_" + file.originalname);
};

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/documents");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

// Adding Profile Pic Instance
const upload = multer({
  fileFilter,
  storage: storage,
  key: authorizedKey,
}).array("bankify", 10);

// INSTANCE
const obj = {
  upload,
};

module.exports = obj;
