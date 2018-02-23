
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart); 


function drawChart() {

//Playa Sarmiento 
		var jsonData = $.ajax({
	        url: "../app/negocio/graficoSarmiento.php",
	        dataType: "json",
	        async: false
	        }).responseText;
	
        var data = new google.visualization.DataTable(jsonData);

        var options = {
                title: 'Playa Sarmiento',
                is3D: true,
              };

        var chart = new google.visualization.PieChart(document.getElementById('playaSarmiento'));

        chart.draw(data,options);	
        
        
//Playa Rio Cuarto 
        var jsonData2 = $.ajax({
	        url: "../app/negocio/graficoRioCuarto.php",
	        dataType: "json",
	        async: false
	        }).responseText;
        
        var data2 = new google.visualization.DataTable(jsonData2);

        var options2 = {
                title: 'Playa Rio Cuarto',
                is3D: true,
              };
        
        var chart2 = new google.visualization.PieChart(document.getElementById('playaRioCuarto'));

        chart2.draw(data2,options2);	 

          
//Estado Vehiculos
		var jsonData3 = $.ajax({
		    url: "../app/negocio/graficoEstadoVehiculos.php",
		    dataType: "json",
		    async: false
			}).responseText;

		var data3 = new google.visualization.DataTable(jsonData3);

        var options3 = {
                 title: 'Estado de vehiculos',
                 is3D: true,
                };

        var chart3 = new google.visualization.PieChart(document.getElementById('estados'));

        chart3.draw(data3,options3);        
        
        
//Egresos
		var jsonData4 = $.ajax({
		    url: "../app/negocio/graficoEgresos.php",
		    dataType: "json",
		    async: false
			}).responseText;

		var data4 = new google.visualization.DataTable(jsonData4);

        var options4 = {
                 title: 'Egresos en los últimos tres meses',
                 is3D: true,
                };

        var chart4 = new google.visualization.PieChart(document.getElementById('egresos'));

        chart4.draw(data4,options4);
}