document.addEventListener("DOMContentLoaded", function () {
    loadAppointments();
    loadDropdowns();
});

// Danh sách khách hàng mẫu
let customers = [
    "Nguyễn Văn A", "Trần Thị B", "Phạm Văn C", "Lê Hoàng D", "Đỗ Thị E",
    "Trịnh Văn F", "Nguyễn Thị G", "Bùi Văn H", "Lương Thị I", "Võ Minh J",
    "Trần Văn K", "Ngô Thị L", "Đặng Văn M", "Lê Minh N", "Vũ Thị O",
    "Hoàng Văn P", "Phan Thị Q", "Đoàn Minh R", "Tạ Văn S", "Cao Thị T",
    "Bùi Văn U", "Lâm Thị V", "Hồ Minh W", "Đinh Văn X", "Phùng Thị Y",
    "Lý Minh Z", "Nguyễn Hoàng AA", "Trần Thị BB", "Lê Văn CC", "Phạm Minh DD"
];

// Danh sách nhân viên mẫu
let employees = [
    "Hoàng Minh - Cắt tóc", "Nguyễn Thảo - Gội đầu", "Trần Dũng - Massage",
    "Lê Huy - Tạo kiểu", "Võ Thanh - Quản lý"
];

// Danh sách dịch vụ mẫu
let services = [
    "Cắt tóc nam", "Cắt tóc nữ", "Nhuộm tóc", "Uốn tóc", "Dưỡng tóc"
];

// Danh sách 30 lịch hẹn mẫu
let appointments = Array.from({ length: 30 }, (_, i) => ({
    customer: customers[i],
    employee: employees[i % employees.length],
    service: services[i % services.length],
    dateTime: `2025-03-${(i % 30) + 1} ${(i % 12) + 8}:00 AM`,
    status: ["Đã đặt", "Hoàn thành", "Đã hủy"][i % 3]
}));

// Hiển thị danh sách lịch hẹn
function loadAppointments(filteredAppointments = appointments) {
    let table = document.getElementById("appointmentTable");
    table.innerHTML = "";

    filteredAppointments.forEach((appointment, index) => {
        let row = table.insertRow();
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${appointment.customer}</td>
            <td>${appointment.employee}</td>
            <td>${appointment.service}</td>
            <td>${appointment.dateTime}</td>
            <td>${appointment.status}</td>
            <td>
                <button class="edit-btn" onclick="editAppointment(${index})">✏ Sửa</button>
                <button class="delete-btn" onclick="deleteAppointment(${index})">🗑 Xóa</button>
            </td>
        `;
    });
}

// Load danh sách vào dropdown
function loadDropdowns() {
    let customerSelect = document.getElementById("customer");
    let employeeSelect = document.getElementById("employee");
    let serviceSelect = document.getElementById("service");
    let statusFilterSelect = document.getElementById("statusFilter");

    customers.forEach(name => {
        let option = document.createElement("option");
        option.value = name;
        option.textContent = name;
        customerSelect.appendChild(option);
    });

    employees.forEach(name => {
        let option = document.createElement("option");
        option.value = name;
        option.textContent = name;
        employeeSelect.appendChild(option);
    });

    services.forEach(name => {
        let option = document.createElement("option");
        option.value = name;
        option.textContent = name;
        serviceSelect.appendChild(option);
    });

    let statusOptions = ["Tất cả", "Đã đặt", "Hoàn thành", "Đã hủy"];
    statusOptions.forEach(status => {
        let option = document.createElement("option");
        option.value = status;
        option.textContent = status;
        statusFilterSelect.appendChild(option);
    });
}

// Biến lưu vị trí lịch hẹn đang sửa
let editIndex = -1;

// Mở form đặt lịch hẹn
function openAppointmentForm() {
    document.getElementById("formTitle").innerText = "Đặt Lịch Hẹn";
    document.getElementById("appointmentForm").style.display = "flex";
    editIndex = -1; // Reset để thêm mới
}

// Đóng form
function closeAppointmentForm() {
    document.getElementById("appointmentForm").style.display = "none";
}

// Lưu lịch hẹn mới hoặc cập nhật lịch hẹn cũ
function saveAppointment() {
    let customer = document.getElementById("customer").value;
    let employee = document.getElementById("employee").value;
    let service = document.getElementById("service").value;
    let dateTime = document.getElementById("dateTime").value;
    let status = document.getElementById("status").value;

    if (customer && employee && service && dateTime) {
        if (editIndex >= 0) {
            // Cập nhật lịch hẹn cũ
            appointments[editIndex] = { customer, employee, service, dateTime, status };
            editIndex = -1; // Reset lại
        } else {
            // Thêm lịch hẹn mới
            appointments.push({ customer, employee, service, dateTime, status });
        }
        closeAppointmentForm();
        loadAppointments();
    } else {
        alert("Vui lòng điền đầy đủ thông tin!");
    }
}

// Chỉnh sửa lịch hẹn
function editAppointment(index) {
    editIndex = index;
    let appointment = appointments[index];

    document.getElementById("customer").value = appointment.customer;
    document.getElementById("employee").value = appointment.employee;
    document.getElementById("service").value = appointment.service;
    document.getElementById("dateTime").value = appointment.dateTime;
    document.getElementById("status").value = appointment.status;

    document.getElementById("formTitle").innerText = "Chỉnh sửa lịch hẹn";
    document.getElementById("appointmentForm").style.display = "flex";
}

// Xóa lịch hẹn
function deleteAppointment(index) {
    if (confirm("Bạn có chắc muốn xóa lịch hẹn này?")) {
        appointments.splice(index, 1);
        loadAppointments();
    }
}

// Tìm kiếm lịch hẹn theo tên khách hàng
function searchAppointments() {
    let keyword = document.getElementById("searchInput").value.toLowerCase();
    let filteredAppointments = appointments.filter(appointment =>
        appointment.customer.toLowerCase().includes(keyword)
    );
    loadAppointments(filteredAppointments);
}

// Lọc lịch hẹn theo trạng thái
function filterAppointments() {
    let statusFilter = document.getElementById("statusFilter").value;
    if (statusFilter === "Tất cả") {
        loadAppointments();
    } else {
        let filteredAppointments = appointments.filter(appointment =>
            appointment.status === statusFilter
        );
        loadAppointments(filteredAppointments);
}
}