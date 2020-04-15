// load data
var ufoData = data;

// refereance to HTML 
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $searchButton= document.querySelector("#filter-btn");

// event listener
$searchButton.addEventListener("click", dataSearch);

// render all the data
function loadTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < ufoData.length; i++) {
    var index = ufoData[i];
    console.log(index)
    var fields = Object.keys(index);
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = index[field];
    }
  }
}

// reload table
function dataSearch() {
  var filterDate = $dateInput.value;
  if (filterDate != "") {
    ufoData = data.filter(function (index) {
      var addressDate = index.datetime;
      console.log(ufoData);
      return addressDate === filterDate;
    });
  }
  else { ufoData };

  loadTable();
}

// load data
loadTable();
