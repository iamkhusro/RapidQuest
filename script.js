google.charts.load('current', {'packages':['corechart']});
google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawColumnChart);
google.charts.setOnLoadCallback(drawColumnChart2);
google.charts.setOnLoadCallback(drawPieChart);

function drawColumnChart() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Total Interest', 'Employee', 'Employer'],
        ['2053', 700, 300, 100],
        ['2054', 1170, 460, 200],
        ['2055', 1330, 520, 300],
        ['2056', 1455, 540, 350]
    ]);

    var options = {
        chart: {
            title: '',
            subtitle: 'Total Interest, Employee, and Employer:',
        }
    };

    var chart = new google.charts.Bar(document.getElementById('columnchart2'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
}

function drawColumnChart2() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Total Interest', 'Employee', 'Employer'],
        ['2053', 700, 300, 100],
        ['2054', 1170, 460, 200],
        ['2055', 1330, 520, 300],
        ['2056', 1455, 540, 350]
    ]);

    var options = {
        chart: {
            title: '',
            subtitle: 'Total Interest, Employee, and Employer:',
        }
    };

    var chart = new google.charts.Bar(document.getElementById('columnchart'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
}



function drawPieChart() {
    var data = google.visualization.arrayToDataTable([
        ['A', 'S'],
        ['Average',     78],
        ['Top',      95],
        ['Me',  59]
    ]);

    var options = {
        title: '',
        pieHole: 0.3,
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}