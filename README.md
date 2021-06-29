# javascript-challenge
<br>
For this project, I used a provided UFO dataset in the form of an array of JavaScript objects, HTML, JavaScript filters, and JavaScript D3 event listeners to create a website that appends a table and adds new rows of data for each UFO sighting based on user input of of a specific date. To view the web page, run the index.html file on a live server. 
<br>

# JavaScript Filter
A filter was used on the dataset to retrieve only the data points that matched the date input by the user. 
<br>

## Example:

```
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
```
<br>

# D3 Event Listeners 
Event listeners were created so the user can run their search after entering the date in the form field by hitting the "Enter" button on their keyboard or by clicking on the "Filter Table" button on the page.

<br>

## Example:
<br>

```
  // Select the button
var button = d3.select("#filter-btn");

  // Select the form
var form = d3.select("#form");
  // Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);
console.log(runEnter);
buildtable(tabledata);
```

<br>

