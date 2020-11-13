// from data.js
var tableData = data;
console.log(tableData);

var tbody = d3.select("tbody");

tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    var row = tbody.append("tr");

    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });



var button = d3.select("#filter-btn");
button.on("click", function() {
    d3.select("tbody").html("");
    d3.event.preventDefault();

    var dateTime = d3.select("#datetime").property("value");
    console.log(dateTime);
    var filteredData = tableData.filter(record => record.datetime === dateTime);
    console.log(filteredData);


    filteredData.forEach((report) => {
        var row = tbody.append('tr');
        Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

});