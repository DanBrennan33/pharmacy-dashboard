class prescriptionOrder {
  constructor(status, patientName, drugName) {
    this.status = status;
    this.patientName = patientName;
    this.drugName = drugName;
  }
  // Getter
  get() {
    status: this.status;
    patientName: this.patientName;
    drugName: this.drugName;
  };
  // Change Status of Order
  changeStatus() {
    if (this.status === "new")
      this.status = "in progress";
    else if (this.status === "in progress")
      this.status = "archived";
    else
      this.status = "new";
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

console.log(orders[0]);

// setInterval(function() {
//   orders[0].changeStatus();
//   console.log(orders[0]);
// }, 10000);

function fetchAllData() {
  var newRequest = document.getElementById("newRequest");
  var inProgressRequest = document.getElementById("inProgressRequest");

  orders.forEach(function(element) {
    if (element.status === "new")
      newRequest.innerHTML += "HELLO 1";
    else if (element.status === "in progress")
      inProgressRequest.innerHTML += "Hello 2";
    else {
      console.log("Hello 3");
    }
  });
};

function stateListener(state) {

}

document.getElementById("refresh").onclick = function() {
                                                          fetchAllData();
                                                        };
