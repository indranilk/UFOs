// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
let filter_data = {}

// 3. Use this function to update the filters. 
function updateFilters() {
let filteredData = tableData;
    // 4a. Save the element that was changed as a variable.
    let date = d3.select("#datetime")
    let city = d3.select('#city')
    let state = d3.select('#state')
    let country = d3.select('#country')
    let shape = d3.select('#shape')
    // 4b. Save the value that was changed as a variable.
    filter_data.date = date.property("value");
    filter_data.city = city.property("value");
    filter_data.state = state.property("value");
    filter_data.country = country.property("value");
    filter_data.shape = shape.property("value");
    // 4c. Save the id of the filter that was changed as a variable.

  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (filter_data.date != "") {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === filter_data.date);
    }

    if (filter_data.city != "") {
      // Apply `filter` to the table data to only keep the
      // rows where the `city` value matches the filter value
      filteredData = filteredData.filter(row => row.city === filter_data.city);
    }

    if (filter_data.state != "") {
      // Apply `filter` to the table data to only keep the
      // rows where the `state` value matches the filter value
      filteredData = filteredData.filter(row => row.state === filter_data.state);
    }

    if (filter_data.country != "") {
      // Apply `filter` to the table data to only keep the
      // rows where the `country` value matches the filter value
      filteredData = filteredData.filter(row => row.country === filter_data.country);
    }

    if (filter_data.shape != "") {
      // Apply `filter` to the table data to only keep the
      // rows where the `shape` value matches the filter value
      filteredData = filteredData.filter(row => row.shape === filter_data.shape);
    }

  
    // 6. Call function to apply all filters and rebuild the table
    /*filterTable();*/
    buildTable(filteredData);
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    
  
    // 10. Finally, rebuild the table using the filtered data
    
  }
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("input").on("change", updateFilters)
  
  // Build the table when the page loads
  buildTable(tableData);
