document.addEventListener("DOMContentLoaded", function () {
    // Fraud Trends Line Chart
    new Chart(document.getElementById("fraudTrends"), {
        type: "line",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [{
                label: "Fraud Cases",
                data: [12, 19, 7, 15, 22, 9],
                borderColor: "#004080",
                backgroundColor: "rgba(0, 64, 128, 0.1)",
                fill: true
            }]
        }
    });

    // Fraud Category Pie Chart
    new Chart(document.getElementById("fraudCategory"), {
        type: "pie",
        data: {
            labels: ["Identity Theft", "False Claims", "Money Laundering", "Other"],
            datasets: [{
                data: [40, 25, 20, 15],
                backgroundColor: ["#004080", "#00796b", "#f4a261", "#e76f51"]
            }]
        }
    });

    // Monthly Claims Analysis Bar Chart
    new Chart(document.getElementById("claimsAnalysis"), {
        type: "bar",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [{
                label: "Claims Processed",
                data: [80, 90, 100, 85, 95, 105],
                backgroundColor: "#00796b"
            }]
        }
    });

    // Fraud Percentage Doughnut Chart
    new Chart(document.getElementById("fraudPercentage"), {
        type: "doughnut",
        data: {
            labels: ["Fraudulent", "Legit"],
            datasets: [{
                data: [30, 70],
                backgroundColor: ["#e63946", "#2a9d8f"]
            }]
        }
    });
});
