// load data
var ufoData = data;

// refereance to HTML 
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $cityInput = document.querySelector("#city");
var $searchButton= document.querySelector("#filter-btn");

// event listener
$searchButton.addEventListener("click", dataSearch);

// render all the data
function loadTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < ufoData.length; i++) {
    var index = ufoData[i];
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
  var filterCity = $cityInput.value;
  if (filterDate != "") {
    ufoData = data.filter(function (index) {
      var addressDate = index.datetime;
      var adressCity = index.city;
      //console.log(ufoData);
      if(filterCity == ""){
        return addressDate === filterDate;
      }else{
        return adressCity === filterCity && addressDate === filterDate;
      }
    });
  }
  else { ufoData };

  loadTable();
}

// load data
loadTable();
