class process {
  constructor(options) {
    let self = this;
    self.init();
  }

  init() {
    console.log("Started");
    // this.content();
  }

  // static selectDropdown(data) {
  //   $("#selectedDropDown").text(data);
  // }
  // static selectDashboard(n) {
  //   $("#home .nav-item").removeClass("active");
  //   $("#home .nav-item:nth-child(" + n + ")").addClass("active");
  //   $("#home .nav-item").unbind("mouseclick");
  //   console.log("selected");
  // }

  // static async addEntry() {
  //   let url = "http://localhost:3333/zt/bankify/add";
  //   let amountType = $("#selectedDropDown").text();
  //   let data = {
  //     particulars: $("#particulars").val(),
  //     description: $("#description").val(),
  //     type: "airtel",
  //     bankify: $("#FileUpload")[0].files[0],
  //   };
  //   data[amountType] = parseInt($("#amount").val());
  //   const headers =
  //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGEzYmEyNTk3M2Y3ZDIxZjgyMzU5NmMiLCJlbWFpbCI6InphaW51bGxhQHp0LmNvbSIsImlhdCI6MTYyMjk2ODQwM30.5RJ5sZahLgfZMnLAR1JDcpFYSCJh6wEESedCenuiyr8";
  //   let response = await postFormdata(url, data, headers);
  //   console.log(response);
  // }
  // getBankify() {
  //   var url = "http://localhost:3333/zt/bankify/add";
  //   var xhr = new XMLHttpRequest();
  //   xhr.open("GET", url, true);
  //   xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  //   xhr.setRequestHeader(
  //     "Authorization",
  //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGEzYmEyNTk3M2Y3ZDIxZjgyMzU5NmMiLCJlbWFpbCI6InphaW51bGxhQHp0LmNvbSIsImlhdCI6MTYyMjQ4ODMyMn0.KGFxSn1Adtti1Jn9j7f5SzH6WrLNxhFc_5uF71JExSkBearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGEzYmEyNTk3M2Y3ZDIxZjgyMzU5NmMiLCJlbWFpbCI6InphaW51bGxhQHp0LmNvbSIsImlhdCI6MTYyMjQ4ODMyMn0.KGFxSn1Adtti1Jn9j7f5SzH6WrLNxhFc_5uF71JExSk"
  //   );
  //   xhr.onload = function () {
  //     var data = JSON.parse(xhr.responseText);
  //     if (xhr.readyState == 4 && xhr.status == "200") {
  //       console.table(data);
  //     } else {
  //       console.error(data);
  //     }
  //   };
  //   xhr.send(null);
  // }
  static async login() {
    const url = "users/login";
    let body = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };
    let response = await post(url, body);
    if (response) {
      sessionStorage.setItem("Token", response.Token);
      window.onbeforeunload = function () {
        sessionStorage.setItem("Token", JSON.stringify(response.Token));
      };
      window.location.href = response.urlDirect;
      window.onload = function () {
        window.Token = JSON.parse(sessionStorage.getItem("Token") || "{}");
      };
    }
  }
}
$(document).ready(function () {
  let obj = new process();
});