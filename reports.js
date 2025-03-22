document.addEventListener("DOMContentLoaded", function() {
    generateReports();
    drawCharts();
});

// Dữ liệu doanh thu & chi phí (giả lập)
let reports = [
    { month: "01/2024", revenue: 50000000, cost: 20000000 },
    { month: "02/2024", revenue: 65000000, cost: 25000000 },
    { month: "03/2024", revenue: 70000000, cost: 30000000 },
    { month: "04/2024", revenue: 80000000, cost: 35000000 },
    { month: "05/2024", revenue: 85000000, cost: 40000000 },
    { month: "06/2024", revenue: 90000000, cost: 45000000 }
];

// Hiển thị báo cáo doanh thu, chi phí, lợi nhuận
function generateReports() {
    let table = document.getElementById("reportTable");
    table.innerHTML = "";

    reports.forEach(report => {
        let profit = report.revenue - report.cost;
        let row = table.insertRow();
        row.innerHTML = `
            <td>${report.month}</td>
            <td>${report.revenue.toLocaleString()} VNĐ</td>
            <td>${report.cost.toLocaleString()} VNĐ</td>
            <td>${profit.toLocaleString()} VNĐ</td>
        `;
    });
}

// Vẽ biểu đồ doanh thu & lợi nhuận
function drawCharts() {
    let labels = reports.map(r => r.month);
    let revenueData = reports.map(r => r.revenue);
    let costData = reports.map(r => r.cost);
    let profitData = reports.map(r => r.revenue - r.cost);

    // Biểu đồ doanh thu & chi phí
    new Chart(document.getElementById("revenueChart"), {
        type: "bar",
        data: {
            labels: labels,
            datasets: [
                { label: "Doanh Thu", data: revenueData, backgroundColor: "rgba(54, 162, 235, 0.6)" },
                { label: "Chi Phí", data: costData, backgroundColor: "rgba(255, 99, 132, 0.6)" }
            ]
        }
    });

    // Biểu đồ lợi nhuận
    new Chart(document.getElementById("profitChart"), {
        type: "line",
        data: {
            labels: labels,
            datasets: [{
                label: "Lợi Nhuận",
                data: profitData,
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                fill: true
            }]
        }
    });
}

// Xuất báo cáo ra file Excel
function exportToExcel() {
    let wb = XLSX.utils.book_new();
    let wsData = [["Tháng", "Doanh Thu (VNĐ)", "Chi Phí (VNĐ)", "Lợi Nhuận (VNĐ)"]];

    reports.forEach(report => {
        let profit = report.revenue - report.cost;
        wsData.push([report.month, report.revenue, report.cost, profit]);
    });

    let ws = XLSX.utils.aoa_to_sheet(wsData);
    XLSX.utils.book_append_sheet(wb, ws, "Báo Cáo Doanh Thu");

    XLSX.writeFile(wb, "Bao_Cao_Doanh_Thu.xlsx");
}
