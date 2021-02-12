var tabledata = data;
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO data from data.js
console.log(tabledata);

function buildtable (data){
  tbody.html("");
  data.forEach((sightings) => {
      var row = tbody.append("tr");
      Object.entries(sightings).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
}

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  var filteredData = tabledata;
  if (inputValue){
    filteredData = filteredData.filter(date => date.datetime === inputValue);
  }
  buildtable(filteredData);
  console.log(filteredData);
}

  // Select the button
var button = d3.select("#filter-btn");

  // Select the form
var form = d3.select(".form-control");
  // Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);
console.log(runEnter);
buildtable(tabledata);