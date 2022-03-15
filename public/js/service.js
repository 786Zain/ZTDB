console.log("service file");
var BACKEND = "http://localhost:3333/zt/";

// Show Toaster Messages
function message(data, status) {
  console.log(status);
  var result = status
    ? `<div class="row">
  <div class="col-12">
  <div class="alert alert-success puff-out-center" role="alert">` +
      data +
      `</div>`
    : `<div class="row">
    <div class="col-12">
    <div class="alert alert-danger puff-out-center" role="alert">` +
      data +
      `</div>`;
  console.log(result);
  return result;
}
// Get all users
function get(url, Auth) {
  let myPromise = new Promise(function (myResolve, myReject) {
    $.ajax({
      url: url,
      type: "GET",
      headers: {
        Authorization: Auth,
      },
      success: function (data) {
        // $("#message")
        // .empty()
        // .append(message(XMLHttpRequest.responseJSON.message, false));
        myResolve(data);
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        $("#message")
          .empty()
          .append(message(XMLHttpRequest.responseJSON.message, false));
        myReject(textStatus);
      },
    });
  });
  return myPromise;
}

//post with formData to add Users
function postFormdata(urlAPI, body, Auth) {
  let myPromise = new Promise(function (myResolve, myReject) {
    var url = BACKEND + urlAPI;
    // Auth = JSON.stringify(Auth);
    console.log(Auth, url);
    var form_data = new FormData();
    for (var key in body) {
      form_data.append(key, body[key]);
    }

    $.ajax({
      url: url,
      data: form_data,
      processData: false,
      contentType: false,
      type: "POST",
      headers: {
        authorization: Auth,
      },
      success: function (data) {
        myResolve(data);
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        myReject(textStatus);
      },
    });
  });
  return myPromise;
}

// Post add new users
function post(url, body) {
  let myPromise = new Promise(function (myResolve, myReject) {
    var urlAPI = BACKEND + url;
    body = JSON.stringify(body);
    $.ajax({
      url: urlAPI,
      data: body,
      type: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      success: function (data) {
        myResolve(data);
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        $("#message")
          .empty()
          .append(message(XMLHttpRequest.responseJSON.message, false));
        myReject(textStatus);
      },
    });
  });
  return myPromise;
}

// put update user
function put() {
  let myPromise = new Promise(function (myResolve, myReject) {});
  return myPromise;
}

// delete users
function deleteUser() {
  let myPromise = new Promise(function (myResolve, myReject) {});
  return myPromise;
}

// Multer Storage to disk
// Step 6: Use Disk Storage
// The disk storage engine gives you full control of storing files to disk.we will create a storage object using:
// var storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, './upload');
//      },
//     filename: function (req, file, cb) {
//         cb(null , file.originalname);
//     }
// });

// $.ajax({
//   url: url,
//   success: function (data) {
//       // Handle success here
//       $('#editor-content-container').html(data);
//       $('#editor-container').modal('show');
//   },
//   cache: false
// }).fail(function (jqXHR, textStatus, error) {
//   // Handle error here
//   $('#editor-content-container').html(jqXHR.responseText);
//   $('#editor-container').modal('show');
// });

// $.ajax({
//   url: '/echo/html/',
//   type: 'PUT',
//   data: "name=John&location=Boston",
//   success: function(data) {
//     alert('Load was performed.');
//   }
// });

// $.ajax({
//   url: 'http://localhost:8080/actors/remover',
//   type: 'DELETE',
//   data: {movie:movie}, //<-----this should be an object.
//   contentType:'application/json',  // <---add this
//   dataType: 'text',                // <---update this
//   success: function(result) {...},
//   error: function(result){...}
// });
// function post(url, body, headers, formData) {
//   let myPromise = new Promise(function (myResolve, myReject) {
//     let headersKey = Object.keys(headers);
//     var json = JSON.stringify(body);
//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", url, true);
//     xhr.setRequestHeader(headersKey[0], headers.Authorization);
//     xhr.onload = function () {
//       var responseData = JSON.parse(xhr.responseText);
//       if (xhr.readyState == 4 && xhr.status == "201") {
//         myResolve(responseData);
//       } else {
//         myReject(responseData);
//       }
//     };
//     xhr.send(json);
//   });
// }

// put upd
// var form_data = new FormData();

// for ( var key in item ) {
//     form_data.append(key, item[key]);
// }

// $.ajax({
//     url         : 'http://example.com/upload.php',
//     data        : form_data,
//     processData : false,
//     contentType : false,
//     type: 'POST'
// }).done(function(data){
//     // do stuff
// });
// and modify the upload variable to
// var upload = multer({ storage: storage })
// var url = "http://localhost:3333/zt/users/login";
// var json = JSON.stringify(body);
// var xhr = new XMLHttpRequest();
// xhr.open("POST", url, true);
// xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
// xhr.onload = function () {
//   var users = JSON.parse(xhr.responseText);
//   if (xhr.readyState == 4 && xhr.status == "201") {
//     console.log(users);
//     sessionStorage.setItem("Token", users.Token);
//     window.onbeforeunload = function () {
//       sessionStorage.setItem("Token", JSON.stringify(users.Token));
//       // localStorage.setItem( "session", JSON.stringify( window.sessvars) );
//     };
//     window.location.href = "Home.html";
//     window.onload = function () {
//       window.Token = JSON.parse(sessionStorage.getItem("Token") || "{}");
//     };
//   } else {
//     console.log(users);
//     window.location.href = "404.html";
//   }
// };
// xhr.send(json);
// }

// var apiCall = new API();
// export { test, get, post, put, deleteUser };
// $(document).ready(function () {
//   var apiCall = new API();
// });

// // Get a user
// var url  = "http://localhost:8080/api/v1/users";
// var xhr  = new XMLHttpRequest()
// xhr.open('GET', url+'/1', true)
// xhr.onload = function () {
// 	var users = JSON.parse(xhr.responseText);
// 	if (xhr.readyState == 4 && xhr.status == "200") {
// 		console.table(users);
// 	} else {
// 		console.error(users);
// 	}
// }
// xhr.send(null);

// // Post a user
// var url = "http://localhost:8080/api/v1/users";

// var data = {};
// data.firstname = "John";
// data.lastname  = "Snow";
// var json = JSON.stringify(data);

// var xhr = new XMLHttpRequest();
// xhr.open("POST", url, true);
// xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
// xhr.onload = function () {
// 	var users = JSON.parse(xhr.responseText);
// 	if (xhr.readyState == 4 && xhr.status == "201") {
// 		console.table(users);
// 	} else {
// 		console.error(users);
// 	}
// }
// xhr.send(json);

// // Update a user
// var url = "http://localhost:8080/api/v1/users";

// var data = {};
// data.firstname = "John2";
// data.lastname  = "Snow2";
// var json = JSON.stringify(data);

// var xhr = new XMLHttpRequest();
// xhr.open("PUT", url+'/12', true);
// xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
// xhr.onload = function () {
// 	var users = JSON.parse(xhr.responseText);
// 	if (xhr.readyState == 4 && xhr.status == "200") {
// 		console.table(users);
// 	} else {
// 		console.error(users);
// 	}
// }
// xhr.send(json);

// // Delete a user
// var url = "http://localhost:8080/api/v1/users";
// var xhr = new XMLHttpRequest();
// xhr.open("DELETE", url+'/12', true);
// xhr.onload = function () {
// 	var users = JSON.parse(xhr.responseText);
// 	if (xhr.readyState == 4 && xhr.status == "200") {
// 		console.table(users);
// 	} else {
// 		console.error(users);
// 	}
// }
// xhr.send(null);
// function easyHTTP() {
//   // Initializing new XMLHttpRequest method.
//   this.http = new XMLHttpRequest();
// }

// // Make an HTTP POST Request
// easyHTTP.prototype.post = function (url, data, callback) {
//   // Open an object (POST, PATH, ASYN-TRUE/FALSE)
//   this.http.open("POST", url, true);

//   // Set content-type
//   this.http.setRequestHeader("Content-type", "application/json");

//   // Assigning this to self to have
//   // scope of this into the function
//   let self = this;

//   // When response is ready
//   this.http.onload = function () {
//     // Callback function (Error, response text)
//     callback(null, self.http.responseText);
//   };

//   // Since the data is an object so
//   // we need to stringify it
//   this.http.send(JSON.stringify(data));
// };
