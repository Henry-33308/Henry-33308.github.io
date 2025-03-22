document.addEventListener("DOMContentLoaded", function() {
    loadPayments();
    loadDropdowns();
});



document.addEventListener("DOMContentLoaded", function() {
    loadPayments();
    loadDropdowns();
});

// Danh sách thanh toán mẫu (50 giao dịch)
let payments = [
    { id: 1, customer: "Nguyễn Văn A", service: "Cắt tóc nam", amount: 100000, method: "Tiền mặt", date: "2024-03-15" },
    { id: 2, customer: "Trần Thị B", service: "Nhuộm tóc", amount: 300000, method: "Chuyển khoản QR", date: "2024-03-16" },
    { id: 3, customer: "Phạm Văn C", service: "Uốn tóc", amount: 400000, method: "Tiền mặt", date: "2024-03-17" },
    { id: 4, customer: "Lê Hoàng D", service: "Dưỡng tóc", amount: 250000, method: "Chuyển khoản QR", date: "2024-03-18" },
    { id: 5, customer: "Đỗ Thị E", service: "Cắt tóc nữ", amount: 150000, method: "Tiền mặt", date: "2024-03-19" },
    { id: 6, customer: "Hoàng Minh F", service: "Gội đầu dưỡng sinh", amount: 150000, method: "Chuyển khoản QR", date: "2024-03-20" },
    { id: 7, customer: "Nguyễn Thảo G", service: "Massage da đầu", amount: 200000, method: "Tiền mặt", date: "2024-03-21" },
    { id: 8, customer: "Trần Dũng H", service: "Tẩy tóc bạch kim", amount: 600000, method: "Chuyển khoản QR", date: "2024-03-22" },
    { id: 9, customer: "Lê Huy I", service: "Nhuộm highlight", amount: 350000, method: "Tiền mặt", date: "2024-03-23" },
    { id: 10, customer: "Võ Thanh J", service: "Phủ bóng tóc", amount: 280000, method: "Chuyển khoản QR", date: "2024-03-24" }
];

// Tạo thêm 40 giao dịch ngẫu nhiên
for (let i = 11; i <= 50; i++) {
    let randomCustomer = "Khách Hàng " + i;
    let servicesList = ["Cắt tóc nam", "Cắt tóc nữ", "Nhuộm tóc", "Uốn tóc", "Dưỡng tóc"];
    let randomService = servicesList[Math.floor(Math.random() * servicesList.length)];
    let randomAmount = Math.floor(Math.random() * 500000) + 100000;
    let randomMethod = Math.random() > 0.5 ? "Tiền mặt" : "Chuyển khoản QR";
    let randomDate = `2024-04-${(i % 30) + 1}`;

    payments.push({ id: i, customer: randomCustomer, service: randomService, amount: randomAmount, method: randomMethod, date: randomDate });
}

// Hiển thị danh sách thanh toán
function loadPayments() {
    let table = document.getElementById("paymentTable");
    table.innerHTML = "";

    payments.forEach((payment, index) => {
        let row = table.insertRow();
        row.innerHTML = `
            <td>${payment.id}</td>
            <td>${payment.customer}</td>
            <td>${payment.service}</td>
            <td>${payment.amount.toLocaleString()} VNĐ</td>
            <td>${payment.method}</td>
            <td>${payment.date}</td>
            <td><button onclick="showInvoice(${index})">🧾 Xem Hóa Đơn</button></td>
        `;
    });
}

// Hiển thị danh sách chọn khách hàng, dịch vụ
function loadDropdowns() {
    let customerSelect = document.getElementById("customer");
    let serviceSelect = document.getElementById("service");

    let customerNames = [...new Set(payments.map(p => p.customer))];
    let serviceNames = [...new Set(payments.map(p => p.service))];

    customerNames.forEach(name => {
        let option = document.createElement("option");
        option.value = name;
        option.textContent = name;
        customerSelect.appendChild(option);
    });

    serviceNames.forEach(name => {
        let option = document.createElement("option");
        option.value = name;
        option.textContent = name;
        serviceSelect.appendChild(option);
    });
}

// Cập nhật giá khi chọn dịch vụ
function updatePrice() {
    let selectedService = document.getElementById("service").value;
    let serviceData = payments.find(p => p.service === selectedService);
    document.getElementById("amount").value = serviceData ? serviceData.amount : "";
}

// Mở form thanh toán
function openPaymentForm() {
    document.getElementById("paymentForm").style.display = "flex";
}

// Đóng form thanh toán
function closePaymentForm() {
    document.getElementById("paymentForm").style.display = "none";
}

// Xác nhận thanh toán
function processPayment() {
    let customer = document.getElementById("customer").value;
    let service = document.getElementById("service").value;
    let amount = document.getElementById("amount").value;
    let method = document.getElementById("paymentMethod").value;
    let date = new Date().toISOString().split("T")[0];

    if (customer && service && amount) {
        payments.push({ id: payments.length + 1, customer, service, amount, method, date });
        closePaymentForm();
        loadPayments();
    } else {
        alert("Vui lòng điền đầy đủ thông tin!");
    }
}

// Hiển thị hóa đơn
function showInvoice(index) {
    let p = payments[index];
    document.getElementById("invoiceCustomer").textContent = p.customer;
    document.getElementById("invoiceService").textContent = p.service;
    document.getElementById("invoiceAmount").textContent = p.amount.toLocaleString();
    document.getElementById("invoiceMethod").textContent = p.method;
    document.getElementById("invoiceDate").textContent = p.date;
    document.getElementById("invoice").style.display = "flex";
}

// Đóng hóa đơn
function closeInvoice() {
    document.getElementById("invoice").style.display = "none";
}

// Đóng form khi click ra ngoài vùng modal
window.onclick = function(event) {
    let paymentForm = document.getElementById("paymentForm");
    let invoiceForm = document.getElementById("invoice");

    if (event.target === paymentForm) {
        closePaymentForm();
    }
    if (event.target === invoiceForm) {
        closeInvoice();
    }
};

// In hóa đơn
function printInvoice() {
    window.print();
}


// Thêm tiếp 25 giao dịch nữa cho đủ 50
for (let i = 26; i <= 50; i++) {
    let randomCustomer = "Khách Hàng " + i;
    let randomService = services[Math.floor(Math.random() * services.length)].name;
    let randomAmount = Math.floor(Math.random() * 500000) + 100000;
    let randomMethod = Math.random() > 0.5 ? "Tiền mặt" : "Chuyển khoản QR";
    let randomDate = `2024-04-${(i % 30) + 1}`;

    payments.push({ id: i, customer: randomCustomer, service: randomService, amount: randomAmount, method: randomMethod, date: randomDate });
}


function loadPayments() {
    let table = document.getElementById("paymentTable");
    table.innerHTML = "";

    payments.forEach((payment, index) => {
        let row = table.insertRow();
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${payment.customer}</td>
            <td>${payment.service}</td>
            <td>${payment.amount.toLocaleString()} VNĐ</td>
            <td>${payment.method}</td>
            <td>${payment.date}</td>
            <td><button onclick="showInvoice(${index})">🧾 Xem Hóa Đơn</button></td>
        `;
    });
}

function loadDropdowns() {
    let customerSelect = document.getElementById("customer");
    let serviceSelect = document.getElementById("service");

    customers.forEach(name => customerSelect.innerHTML += `<option value="${name}">${name}</option>`);
    services.forEach(s => serviceSelect.innerHTML += `<option value="${s.name}" data-price="${s.price}">${s.name}</option>`);
}

function updatePrice() {
    let selectedService = document.getElementById("service").selectedOptions[0];
    document.getElementById("amount").value = selectedService.dataset.price || "";
}

function processPayment() {
    let customer = document.getElementById("customer").value;
    let service = document.getElementById("service").value;
    let amount = document.getElementById("amount").value;
    let method = document.getElementById("paymentMethod").value;
    let date = new Date().toLocaleDateString();

    payments.push({ customer, service, amount, method, date });
    closePaymentForm();
    loadPayments();
}

function showInvoice(index) {
    let p = payments[index];
    document.getElementById("invoiceCustomer").textContent = p.customer;
    document.getElementById("invoiceService").textContent = p.service;
    document.getElementById("invoiceAmount").textContent = p.amount;
    document.getElementById("invoiceMethod").textContent = p.method;
    document.getElementById("invoiceDate").textContent = p.date;
    document.getElementById("invoice").style.display = "flex";
}

function printInvoice() {
    window.print();
}
