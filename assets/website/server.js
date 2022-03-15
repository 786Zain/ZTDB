// PACKAGES
const express = require("express");
const path = require("path");
// require("dotenv").config();
// const mongoose = require("mongoose");
// const cors = require("cors");
// const helmet = require("helmet");
// const bodyParser = require("body-parser");
// const httpContext = require('express-http-context')

// MIDDLEWARE
// const Routes = require("./routes/index");
const app = express();
const http = require("http").Server(app);
const port = 2424;

// const io = require("socket.io")(http);
// io.on("connection", () => {
//   console.log("a user is connected");
// });

// APPLICATION MIDDLEWARES
const staticSite = path.join(__dirname, "/");
app.use(express.static(staticSite));
// app.use(helmet());
// app.use(bodyParser.json());
// app.use(cors());
// app.use("/zt/", Routes);
// wild route
// app.use((req, res) => {
//   res.send("Page not found");
// });

// ERROR MIDDLEWARE
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  console.log(
    "Error Message: ",
    error.message,
    " Technical Issue ErrorRef Code: ",
    error.code
  );
  res
    .status(error.code || 500)
    .json({ message: error.message || "An unknown error occurred!" });
});

// MONGODB CONNECTION
// mongoose
//   .connect(process.env.MONGODBCONN, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//   })
//   .then(() => {
//     console.log("Mongo db connected");
//   })
//   .catch((err) => console.log("can not connect to Mongo db" + err));

app.listen(port, () => console.log(`Mobile-Theme listening on port ${port}`));
