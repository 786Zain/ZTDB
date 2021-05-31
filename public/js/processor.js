class process {
  constructor(options) {
    let self = this;
    self.init();
  }

  init() {
    console.log("Started");

    // console.log("Service ", apiCall.test());
    // $.getScript("./service.js", function () {

    // });

    //   var apiCall = new API();
    //   console.log(data);
    // }).done(function (script, textStatus) {});
    // API.test();
    // $.getScript("./service.js")
    //   .done(function (script, textStatus) {
    //     console.log(textStatus);
    //     let xhr = apiCall.post("url", { body: "zain" });
    //   })
    //   .fail(function (jqxhr, settings, exception) {
    //     console.log("Triggered ajaxError handler.");
    //     // $( "div.log" ).text( );
    //   });
    this.content();
  }

  content() {
    $("#content")
      .empty()
      .append(
        `<div class="card-body">
        <div class="table-responsive fs--1">
          <table class="table table-striped border-bottom">
            <thead class="bg-200 text-900">
              <tr>
                <th class="border-0">Particulars</th>
                <th class="border-0 text-center">Credit</th>
                <th class="border-0 text-right">Debit</th>
                <th class="border-0 text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="align-middle">
                  <h6 class="mb-0 text-nowrap">Platinum web hosting package</h6>
                  <p class="mb-0">Down 35mb, Up 100mb</p>
                </td>
                <td class="align-middle text-center">2</td>
                <td class="align-middle text-right">$65.00</td>
                <td class="align-middle text-right">$130.00</td>
              </tr>
              <tr>
                <td class="align-middle">
                  <h6 class="mb-0 text-nowrap">2 Page website design</h6>
                  <p class="mb-0">Includes basic wireframes and responsive templates</p>
                </td>
                <td class="align-middle text-center">1</td>
                <td class="align-middle text-right">$2,100.00</td>
                <td class="align-middle text-right">$2,100.00</td>
              </tr>
              <tr>
                <td class="align-middle">
                  <h6 class="mb-0 text-nowrap">Mobile App Development</h6>
                  <p class="mb-0">Includes responsive navigation</p>
                </td>
                <td class="align-middle text-center">8</td>
                <td class="align-middle text-right">$5,00.00</td>
                <td class="align-middle text-right">$4,000.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="row no-gutters justify-content-end">
          <div class="col-auto">
            <table class="table table-sm table-borderless fs--1 text-right">
              <tbody><tr>
                <th class="text-900">Subtotal:</th>
                <td class="font-weight-semi-bold">$6,230.00 </td>
              </tr>
              <tr>
                <th class="text-900">Tax 5%:</th>
                <td class="font-weight-semi-bold">$311.50</td>
              </tr>
              <tr class="border-top">
                <th class="text-900">Total:</th>
                <td class="font-weight-semi-bold">$6541.50</td>
              </tr>
            </tbody></table>
          </div>
        </div>
      </div>`
      );
  }
  static selectDashboard(n) {
    $("#home .nav-item").removeClass("active");
    $("#home .nav-item:nth-child(" + n + ")").addClass("active");
    $("#home .nav-item").unbind("mouseclick");
    console.log("selected");
  }
  getBankify() {
    var url = "http://localhost:3333/zt/bankify/add";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function () {
      var data = JSON.parse(xhr.responseText);
      if (xhr.readyState == 4 && xhr.status == "200") {
        console.table(data);
      } else {
        console.error(data);
      }
    };
    xhr.send(null);
  }
  static async login() {
    const url = "http://localhost:3333/zt/users/login";
    let body = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };
    var json = JSON.stringify(body);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhr.onload = function () {
      var responseData = JSON.parse(xhr.responseText);
      if (xhr.readyState == 4 && xhr.status == "201") {
        sessionStorage.setItem("Token", responseData.Token);
        window.onbeforeunload = function () {
          sessionStorage.setItem("Token", JSON.stringify(responseData.Token));
        };
        window.location.href = "Home.html";
        window.onload = function () {
          window.Token = JSON.parse(sessionStorage.getItem("Token") || "{}");
        };
      } else {
        window.location.href = "404.html";
      }
    };
    xhr.send(json);
  }
}
$(document).ready(function () {
  let obj = new process();
});
