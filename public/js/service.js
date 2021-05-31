console.log("service file");
// class API {
//   constructor() {
//     let self = this;
//     self.test();
//   }
function formSchema() {
  $("#formSchema").empty().append(`
    <div class="modal-dialog modal-dialog-vertical" role="document">
  <div class="modal-content border-0 vh-100 scrollbar perfect-scrollbar">
    <div class="modal-header modal-header-settings">
      <div class="z-index-1 py-1 flex-grow-1">
        <h5 class="text-white" id="settings-modal-label"> <svg class="svg-inline--fa fa-palette fa-w-16 mr-2 fs-0" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="palette" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path></svg><!-- <span class="fas fa-palette mr-2 fs-0"></span> Font Awesome fontawesome.com -->Settings
        </h5>
        <p class="mb-0 fs--1 text-white opacity-75"> Set your own customized style</p>
      </div><button class="close z-index-1" type="button" data-dismiss="modal" aria-label="Close"><span class="font-weight-light" aria-hidden="true">×</span></button>
    </div>
    <div class="modal-body px-card">
      <h5 class="fs-0">Color Scheme</h5>
      <p class="fs--1">Choose the perfect color mode for your app. </p>
      <div class="btn-group btn-group-toggle btn-block" data-toggle="buttons">
        <div class="btn btn-theme-default custom-control custom-radio custom-radio-success"><label class="cursor-pointer hover-overlay" for="theme-mode-default"><img class="w-100" src="../assets/img/generic/falcon-mode-default.jpg" alt=""></label><label class="cursor-pointer mb-0 d-flex justify-content-center pl-3" for="theme-mode-default"><input class="custom-control-input" id="theme-mode-default" type="radio" name="colorScheme" data-mode="DARK" value="theme-mode-default" data-page-url="../index.html"><span class="custom-control-label">Light</span></label></div>
        <div class="btn btn-theme-dark custom-control custom-radio custom-radio-success true active"><label class="cursor-pointer hover-overlay" for="theme-mode-dark"><img class="w-100" src="../assets/img/generic/falcon-mode-dark.jpg" alt=""></label><label class="cursor-pointer mb-0 d-flex justify-content-center pl-3" for="theme-mode-dark"><input class="custom-control-input" id="theme-mode-dark" type="radio" name="colorScheme" data-mode="DARK" checked="checked" value="theme-mode-dark" data-page-url="../documentation/dark-mode.html"><span class="custom-control-label">Dark</span></label></div>
      </div>
      <hr>
      <div class="d-flex justify-content-between">
        <div class="media flex-grow-1"><img class="mr-2" src="../assets/img/icons/left-arrow-from-left.svg" width="20" alt="">
          <div class="media-body">
            <h5 class="fs-0">RTL Mode</h5>
            <p class="fs--1 mb-0">Switch your language direction </p>
          </div>
        </div>
        <div class="custom-control custom-switch"><input class="custom-control-input" id="mode-rtl" type="checkbox" data-mode="DARK"><label class="custom-control-label" for="mode-rtl"> </label>
        </div>
      </div>
      <hr>
      <div class="d-flex justify-content-between">
        <div class="media flex-grow-1"><img class="mr-2" src="../assets/img/icons/arrows-h.svg" width="20" alt="">
          <div class="media-body">
            <h5 class="fs-0">Fluid Layout</h5>
            <p class="fs--1 mb-0">Toggle container layout system </p>
          </div>
        </div>
        <div class="custom-control custom-switch"><input class="custom-control-input" id="mode-fluid" type="checkbox"><label class="custom-control-label" for="mode-fluid"> </label></div>
      </div>
      <hr>
      <div class="media"><img class="mr-2" src="../assets/img/icons/paragraph.svg" width="20" alt="">
        <div class="media-body">
          <h5 class="fs-0 d-flex align-items-center">Navigation Position <span class="badge badge-pill badge-soft-success fs--2 ml-2">Updated</span></h5>
          <p class="fs--1 mb-2">Select a suitable navigation system for your web application </p>
          <div class="custom-control custom-radio custom-control-inline"><input class="custom-control-input" id="option-navbar-vertical" type="radio" name="navbar" value="vertical" checked="checked"><label class="custom-control-label" for="option-navbar-vertical">Vertical</label></div>
          <div class="custom-control custom-radio custom-control-inline"><input class="custom-control-input" id="option-navbar-top" type="radio" name="navbar" value="top"><label class="custom-control-label" for="option-navbar-top">Top</label></div>
          <div class="custom-control custom-radio custom-control-inline mr-0"><input class="custom-control-input" id="option-navbar-combo" type="radio" name="navbar" value="combo"><label class="custom-control-label" for="option-navbar-combo">Combo</label></div>
        </div>
      </div>
      <hr>
      <h5 class="fs-0 d-flex align-items-center">Vertical Navbar Style</h5>
      <p class="fs--1">Switch between styles for your vertical navbar </p>
      <div class="btn-group-toggle btn-block btn-group-navbar-style" data-toggle="buttons">
        <div class="btn-group btn-block">
          <div class="btn p-0 text-left custom-control custom-radio custom-radio-success mr-2"><label class="cursor-pointer w-100" for="navbar-style-transparent"><img class="w-100" src="../assets/img/generic/default.png" alt=""></label><label class="cursor-pointer d-flex mb-0 pl-3 ml-2" for="navbar-style-transparent"><input class="custom-control-input" id="navbar-style-transparent" type="radio" name="navbarVertical" value="transparent"><span class="custom-control-label"> Transparent</span></label></div>
          <div class="btn p-0 text-left custom-control custom-radio custom-radio-success mr-2"><label class="cursor-pointer w-100" for="navbar-style-inverted"><img class="w-100" src="../assets/img/generic/inverted.png" alt=""></label><label class="cursor-pointer d-flex mb-0 pl-3 ml-2" for="navbar-style-inverted"><input class="custom-control-input" id="navbar-style-inverted" type="radio" name="navbarVertical" value="inverted"><span class="custom-control-label"> Inverted</span></label></div>
        </div>
        <div class="btn-group btn-block mt-3">
          <div class="btn p-0 text-left custom-control custom-radio custom-radio-success mr-2"><label class="cursor-pointer w-100" for="navbar-style-card"><img class="w-100" src="../assets/img/generic/card.png" alt=""></label><label class="cursor-pointer d-flex mb-0 pl-3 ml-2" for="navbar-style-card"><input class="custom-control-input" id="navbar-style-card" type="radio" name="navbarVertical" value="card"><span class="custom-control-label"> Card</span></label></div>
          <div class="btn p-0 text-left custom-control custom-radio custom-radio-success mr-2"><label class="cursor-pointer w-100" for="navbar-style-vibrant"><img class="w-100" src="../assets/img/generic/vibrant.png" alt=""></label><label class="cursor-pointer d-flex mb-0 pl-3 ml-2" for="navbar-style-vibrant"><input class="custom-control-input" id="navbar-style-vibrant" type="radio" name="navbarVertical" value="vibrant"><span class="custom-control-label"> Vibrant</span></label></div>
        </div>
      </div>
      <hr>
      <div class="text-center mt-5"><img class="mb-4" src="../assets/img/illustrations/settings.png" alt="" width="120">
        <h5>Like What You See?</h5>
        <p class="fs--1">Get Falcon now and create beautiful dashboards with hundreds of widgets.</p><a class="btn btn-primary" href="https://themes.getbootstrap.com/product/falcon-admin-dashboard-webapp-template/">Purchase</a>
      </div>
    </div>
  </div>
</div>`);
}
// Get all users
function get(url) {
  var url = "http://localhost:8080/api/v1/users";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = function () {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
      console.table(users);
    } else {
      console.error(users);
    }
  };
  xhr.send(null);
}
// Post add new users
function post(url, body) {
  let myPromise = new Promise(function (myResolve, myReject) {
    var url = url;
    var json = JSON.stringify(body);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhr.onload = function () {
      var responseData = JSON.parse(xhr.responseText);
      if (xhr.readyState == 4 && xhr.status == "201") {
        myResolve(responseData);
      } else {
        myReject(responseData);
      }
    };
    xhr.send(json);
  });
}
// put update user
function put() {
  var url = "http://localhost:8080/api/v1/users";

  var data = {};
  data.firstname = "John2";
  data.lastname = "Snow2";
  var json = JSON.stringify(data);

  var xhr = new XMLHttpRequest();
  xhr.open("PUT", url + "/12", true);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.onload = function () {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
      console.table(users);
    } else {
      console.error(users);
    }
  };
  xhr.send(json);
}
// delete users
function deleteUser() {
  var url = "http://localhost:8080/api/v1/users";
  var xhr = new XMLHttpRequest();
  xhr.open("DELETE", url + "/12", true);
  xhr.onload = function () {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
      console.table(users);
    } else {
      console.error(users);
    }
  };
  xhr.send(null);
}
function test() {
  console.log("working");
}
// }

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
