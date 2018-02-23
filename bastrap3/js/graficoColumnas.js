 google.charts.load('current', {'packages':['bar']});
 google.charts.setOnLoadCallback(drawChart);

function drawChart() {
	  
	  var jsonData = $.ajax({
	        url: "../../../sugpa/app/negocio/graficoColumnasLineal.php",
	        dataType: "json",
	        async: false
	        }).responseText;
	  
	  var data = new google.visualization.DataTable(jsonData);

	  var options = {};
	  
	  var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

	  chart.draw(data, google.charts.Bar.convertOptions(options));
}