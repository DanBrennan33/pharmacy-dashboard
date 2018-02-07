class prescriptionOrder {
  constructor(status, patientName, drugName) {
    this.status = status;
    this.patientName = patientName;
    this.drugName = drugName;
  }

  // Change Status of Order
  changeStatus() {
    if (this.status === "new")
      this.status = "in progress";
    else
      this.status = "archived";
  }
}

var orders = [
                new prescriptionOrder(
                  "new",
                  "Mia",
                  "Lipitor"
                ),
                new prescriptionOrder(
                  "in progress",
                  "Ali",
                  "Nexium"
                ),
                new prescriptionOrder(
                  "new",
                  "Fred",
                  "Lyrica"
                )
              ];

class transferRequest {
  constructor(status, patientName, drugName) {
    this.status = status;
    this.patientName = patientName;
    this.drugName = drugName;
  }
  // Change Status of transfer
  changeStatus() {
    if (this.status === "new")
      this.status = "in progress";
    else
      this.status = "archived";
  }
}

var transfers = [
                  new transferRequest(
                    "new",
                    "Mia",
                    "Lipitor"
                  ),
                  new transferRequest(
                    "in progress",
                    "Ali",
                    "Nexium"
                  ),
                  new transferRequest(
                    "new",
                    "Fred",
                    "Lyrica"
                  )
                ];

console.log(orders[0]);

/**
  Every 5 second interval to randomly select order and transfer value,
  then calls changeStatus().
*/
setInterval(function() {
  var tempVal1 = (Math.floor(Math.random() * 3) + 1) - 1;
  var tempVal2 = (Math.floor(Math.random() * 3) + 1) - 1;
  orders[tempVal1].changeStatus();
  transfers[tempVal2].changeStatus();
}, 5000);

/**
  Function to clear row-content document object.
 */
function clearHTML() {
  document.getElementById("newRequest").innerHTML = "";
  document.getElementById("inProgressRequest").innerHTML = "";
}

/**
  FetchAllData function shows object data in the DOM.
  Called immediately on DOM load or refresh.
  Called on "REFRESH" button event listener.
*/
function fetchAllData() {
  clearHTML();
  var newRequest = document.getElementById("newRequest");
  var inProgressRequest = document.getElementById("inProgressRequest");

  orders.forEach(function(element) {
    var text = "<div class='col-12 order-content'>" +
               "Patient: " + element.patientName + "<br />" +
               "Drug: " + element.drugName +
               "</div>";

    if (element.status === "new")
      newRequest.innerHTML += text;
    else if (element.status === "in progress")
      inProgressRequest.innerHTML += text;
  });

  transfers.forEach(function(element) {
    var text = "<div class='col-12 transfer-content'>" +
               "Patient: " + element.patientName + "<br />" +
               "Drug: " + element.drugName +
               "</div>";

    if (element.status === "new")
      newRequest.innerHTML += text;
    else if (element.status === "in progress")
      inProgressRequest.innerHTML += text;
  });
};

function stateListener(state) {

}

/**
  Anonymous function to call fetchAllData on DOM load or refresh.
*/
(function() { fetchAllData(); })();

/**
  DOM event listener for "REFRESH" button, calls fetchAllData.
*/
document.getElementById("refresh").addEventListener('click', fetchAllData);
