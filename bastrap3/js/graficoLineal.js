google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
	
function drawChart() {
	
	 var jsonData = $.ajax({
        	url: "../../../sugpa/app/negocio/graficoColumnasLineal.php",
        	dataType: "json",
        	async: false
        	}).responseText;
	
	 var data = new google.visualization.DataTable(jsonData);
	
	 var options = {};
	
	 var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
	
	 chart.draw(data, options);
}