document.addEventListener("DOMContentLoaded", function() {
    generateStatistics();
    drawCharts();
});

// Dữ liệu thanh toán (lấy từ payments.js)
let payments = [
    { customer: "Nguyễn Văn A", service: "Cắt tóc nam", amount: 100000 },
    { customer: "Trần Thị B", service: "Nhuộm tóc", amount: 300000 },
    { customer: "Phạm Văn C", service: "Uốn tóc", amount: 400000 },
    { customer: "Lê Hoàng D", service: "Dưỡng tóc", amount: 250000 },
    { customer: "Đỗ Thị E", service: "Cắt tóc nữ", amount: 150000 },
    { customer: "Nguyễn Văn A", service: "Cắt tóc nam", amount: 100000 },
    { customer: "Trần Thị B", service: "Gội đầu dưỡng sinh", amount: 150000 },
    { customer: "Lê Hoàng D", service: "Nhuộm tóc", amount: 300000 }
];

// Thống kê số lượng khách hàng sử dụng từng dịch vụ
function generateStatistics() {
    let serviceStats = {};

    payments.forEach(payment => {
        if (!serviceStats[payment.service]) {
            serviceStats[payment.service] = { customers: 0, revenue: 0 };
        }
        serviceStats[payment.service].customers += 1;
        serviceStats[payment.service].revenue += payment.amount;
    });

    let table = document.getElementById("statsTable");
    table.innerHTML = "";

    for (let service in serviceStats) {
        let row = table.insertRow();
        row.innerHTML = `
            <td>${service}</td>
            <td>${serviceStats[service].customers}</td>
            <td>${serviceStats[service].revenue.toLocaleString()} VNĐ</td>
        `;
    }

    return serviceStats;
}

// Vẽ biểu đồ thống kê
function drawCharts() {
    let serviceStats = generateStatistics();
    let labels = Object.keys(serviceStats);
    let customerData = labels.map(service => serviceStats[service].customers);
    let revenueData = labels.map(service => serviceStats[service].revenue);

    // Biểu đồ số lượng khách hàng sử dụng dịch vụ
    new Chart(document.getElementById("serviceChart"), {
        type: "bar",
        data: {
            labels: labels,
            datasets: [{
                label: "Số Lượng Khách Hàng",
                data: customerData,
                backgroundColor: "rgba(54, 162, 235, 0.6)"
            }]
        }
    });

    // Biểu đồ doanh thu từ các dịch vụ
    new Chart(document.getElementById("revenueChart"), {
        type: "pie",
        data: {
            labels: labels,
            datasets: [{
                label: "Doanh Thu (VNĐ)",
                data: revenueData,
                backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0", "#9966ff"]
            }]
        }
    });
}
