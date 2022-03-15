class bankify {
  constructor(options) {
    let self = this;
    self.init();
  }

  init() {
    console.log("Started Bankify");
    bankify.getBankify();
  }

  // Helpers

  static selectDropdown(data) {
    $("#selectedDropDown").text(data);
  }

  static selectDashboard(n, moduleType) {
    $("#home .nav-item").removeClass("active");
    $("#home .nav-item:nth-child(" + n + ")").addClass("active");
    $("#home .nav-item").unbind("mouseclick");
    bankify.pageSelect(n);
    bankify.modelInsert(moduleType);
    // $(".navbar-collapse,.collapse").removeClass("show");
    // $(".navbar-collapse .collapse").addClass("collapsing");
    // $(".navbar-collapse .collapse").removeClass("show");
    console.log("selected");
  }

  static bankifyTable(data) {
    console.log(data);
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
            <tbody>` +
          data +
          `
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

  static modelInsert(details) {
    $("#addModel")
      .empty()
      .append(
        `
    <div class="modal-dialog modal-dialog-vertical" role="document">
    <div class="modal-content border-0 vh-100 scrollbar perfect-scrollbar">
      <div class="modal-header modal-header-settings">
        <div class="z-index-1 py-1 flex-grow-1">
          <h5 class="text-white" id="settings-modal-label"> <span class="fas fa-palette mr-2 fs-0"></span>Entry
          </h5>
          <p class="mb-0 fs--1 text-white opacity-75"> Add expenses details here</p>
        </div><button class="close z-index-1" type="button" data-dismiss="modal" aria-label="Close"><span
            class="font-weight-light" aria-hidden="true">&times;</span></button>
      </div>
      <div class="modal-body px-card">
        <h2 class="fs-0">` +
          details +
          `</h2>
        <p class="fs--1">Enter Bill Details and upload document </p>
        <div class="input-group mb-3">
          <div class="input-group-prepend"><span class="input-group-text" id="Particular">Particular</span>
          </div><input class="form-control" id="particulars" type="text" placeholder="Transaction Title"
            aria-label="Particular" aria-describedby="Particular">
        </div>
        <hr />
        <div class="input-group mb-3">
          <div class="input-group-prepend"><span class="input-group-text" id="Description">Description</span>
          </div><input class="form-control" id="description" type="text" placeholder="Txn Description"
            aria-label="Description" aria-describedby="Description">
        </div>
        <hr />
        <div class="input-group mb-3">
          <div class="input-group-prepend"><span class="input-group-text">$</span></div>
          <input class="form-control" type="number" id="amount">
          <div class="input-group-append"><button class="btn btn-primary dropdown-toggle shadow-none"
              type="button" id="selectedDropDown" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">Dropdown</button>
            <div class="dropdown-menu">
              <p class="dropdown-item" onclick="bankify.selectDropdown(event.target.firstChild.data)">Credit</p>
              <p class="dropdown-item" onclick="bankify.selectDropdown(event.target.firstChild.data)">Debit</p>
              <div class="dropdown-divider" role="separator"></div>
              <p class="dropdown-item" onclick="bankify.selectDropdown(event.target.firstChild.data)">Pending</p>
            </div>
          </div>
        </div>
        <hr />
        <div class="input-group mb-3">
          <div class="input-group-prepend"><span class="input-group-text">Upload</span>
          </div><input class="form-control" id="FileUpload" type="file" aria-label="FileUpload"
            aria-describedby="FileUpload">
        </div>
        <hr />
        <div class="text-center mt-5">
          <button class="btn btn-primary" onClick="bankify.addEntry('` +
          details +
          `')">Submit</button>
        </div>
      </div>
    </div>
  </div>`
      );
  }

  static contentDisplay(data) {
    var displayData = "";
    var Balance;
    for (var i = 0; i < data.data.length; i++) {
      // data.data[i].Credit = data.data[i].Credit ? data.data[i].Credit : 0;
      // data.data[i].Debit = data.data[i].Debit ? data.data[i].Debit : 0;
      // Balance = data.data[i].Debit - data.data[i].Credit;
      displayData =
        displayData +
        `<tr>
        <td class="align-middle">
          <h6 class="mb-0 text-nowrap">` +
        data.data[i].particulars +
        `</h6>
          <p class="mb-0">` +
        data.data[i].description +
        `</p>
        </td>
        <td class="align-middle text-center">` +
        data.data[i].Credit +
        `</td>
        <td class="align-middle text-right">` +
        data.data[i].Debit +
        `</td>
        <td class="align-middle text-right">` +
        data.data[i].Balance +
        `</td>
      </tr>`;
    }
    bankify.bankifyTable(displayData);
  }

  static pageSelect(pageName) {
    switch (pageName) {
      case 1:
        bankify.getBankify();
        break;
      case 2:
        bankify.getBescom();
        break;
      case 3:
        bankify.getDaily();
        break;
      case 4:
        alert("Share Market Page Coming soon");
        break;
      default:
        alert("Redirect to Default");
    }
  }

  // API calls

  static async addEntry(moduleType) {
    let url = "bankify/add";
    let amountType = $("#selectedDropDown").text();
    let data = {
      particulars: $("#particulars").val(),
      description: $("#description").val(),
      type: moduleType,
      bankify: $("#FileUpload")[0].files[0],
    };
    data[amountType] = parseInt($("#amount").val());
    let trimToken = sessionStorage.getItem("Token");
    trimToken = trimToken.substr(1, 184);
    const headers = "Bearer " + trimToken;
    console.log(headers);
    let response = await postFormdata(url, data, headers);
    console.log(response);
  }

  static async getBankify() {
    const params = "?tabName=airtel";
    var url = "http://localhost:3333/zt/bankify/manageTransaction" + params;
    let trimToken = sessionStorage.getItem("Token");
    trimToken = trimToken.substr(1, 184);
    const headers = "Bearer " + trimToken;
    let response = await get(url, headers);
    bankify.contentDisplay(response);
  }

  static async getBescom() {
    const params = "?tabName=bescom";
    var url = "http://localhost:3333/zt/bankify/manageTransaction" + params;
    let trimToken = sessionStorage.getItem("Token");
    trimToken = trimToken.substr(1, 184);
    const headers = "Bearer " + trimToken;
    let response = await get(url, headers);
    bankify.contentDisplay(response);
  }

  static async getDaily() {
    const params = "?tabName=daily";
    var url = "http://localhost:3333/zt/bankify/manageTransaction" + params;
    let trimToken = sessionStorage.getItem("Token");
    trimToken = trimToken.substr(1, 184);
    const headers = "Bearer " + trimToken;
    let response = await get(url, headers);
    bankify.contentDisplay(response);
  }

  static async shareMarket() {
    const params = "?tabName=share";
    var url = "http://localhost:3333/zt/bankify/manageTransaction" + params;
    let trimToken = sessionStorage.getItem("Token");
    trimToken = trimToken.substr(1, 184);
    const headers = "Bearer " + trimToken;
    let response = await get(url, headers);
    bankify.contentDisplay(response);
  }
}

$(document).ready(function () {
  let obj2 = new bankify();
});
