var tabledata = data;
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

// data.forEach(function(sightings) {
//     console.log(sightings);
//     var row = tbody.append("tr");
    
//     Object.entries(sightings).forEach(function([key, value]) {
//         console.log(key, value);
//         // Append a cell to the row for each value
//         // in the weather report object
//     var cell = row.append("td");
//  cell.text(value);
// });
// });

data.forEach((sightings) => {
    var row = tbody.append("tr");
    Object.entries(sightings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });