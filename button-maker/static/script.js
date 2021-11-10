window.onload = function () {
    var xValues = ["12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "24:00", "02:00", "04:00", "06:00", "08:00", "10:00",];

    new Chart("chart", {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
                data: [4959, 5021, 5195, 5294, 5319, 5235, 5318, 5418, 5291, 5305, 5529, 5619],
                fill: true,
                backgroundColor: "transparent",
                pointBackgroundColor: "#1f2733",
                pointBorderColor: "#1f2733",
                borderColor: "#1f2733",
                pointHoverRadius: 4
            }]
        },
        options: {
            legend: {display: false}
        }
    });
}