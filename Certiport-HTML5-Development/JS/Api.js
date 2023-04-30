google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses'],
    ['2016', 1000, 400],
    ['2017', 1170, 460],
    ['2018', 660, 1120],
    ['2019', 1030, 540]
  ]);

  // Set the chart options
  var options = {
    title: 'Sales and Expenses',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

  chart.draw(data, options);
}
