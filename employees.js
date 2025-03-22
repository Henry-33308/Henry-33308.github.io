document.addEventListener("DOMContentLoaded", function() {
    loadEmployees();
});

let employees = [
    { id: 1, name: "Nguyễn Văn A", phone: "0912345678", position: "Nhân viên Cắt tóc" },
    { id: 2, name: "Trần Thị B", phone: "0987654321", position: "Nhân viên Gội đầu" },
    { id: 3, name: "Phạm Văn C", phone: "0934567891", position: "Nhân viên Massage" },
    { id: 4, name: "Lê Hoàng D", phone: "0901234567", position: "Lễ tân" },
    { id: 5, name: "Đỗ Thị E", phone: "0976543210", position: "Quản lý" },
    { id: 6, name: "Hoàng Văn F", phone: "0923456789", position: "Nhân viên Cắt tóc" },
    { id: 7, name: "Nguyễn Thị G", phone: "0967891234", position: "Nhân viên Gội đầu" },
    { id: 8, name: "Bùi Minh H", phone: "0956789123", position: "Nhân viên Massage" },
    { id: 9, name: "Lâm Quang I", phone: "0945678912", position: "Lễ tân" },
    { id: 10, name: "Võ Thị J", phone: "0934567890", position: "Quản lý" },
    { id: 11, name: "Phan Văn K", phone: "0912345679", position: "Nhân viên Cắt tóc" },
    { id: 12, name: "Lý Hoàng L", phone: "0909876543", position: "Nhân viên Gội đầu" },
    { id: 13, name: "Trương Mỹ M", phone: "0998765432", position: "Nhân viên Massage" },
    { id: 14, name: "Nguyễn Văn N", phone: "0987654320", position: "Lễ tân" },
    { id: 15, name: "Trịnh Văn O", phone: "0976543201", position: "Quản lý" },
    { id: 16, name: "Tô Thị P", phone: "0965432109", position: "Nhân viên Cắt tóc" },
    { id: 17, name: "Vũ Hoàng Q", phone: "0954321098", position: "Nhân viên Gội đầu" },
    { id: 18, name: "Lê Minh R", phone: "0943210987", position: "Nhân viên Massage" },
    { id: 19, name: "Đặng Văn S", phone: "0932109876", position: "Lễ tân" },
    { id: 20, name: "Mai Thị T", phone: "0921098765", position: "Quản lý" },
    { id: 21, name: "Nguyễn Thị U", phone: "0910987654", position: "Nhân viên Cắt tóc" },
    { id: 22, name: "Đoàn Văn V", phone: "0909876543", position: "Nhân viên Gội đầu" },
    { id: 23, name: "Quách Minh W", phone: "0998765432", position: "Nhân viên Massage" },
    { id: 24, name: "Trịnh Văn X", phone: "0987654321", position: "Lễ tân" },
    { id: 25, name: "Nguyễn Văn Y", phone: "0976543210", position: "Quản lý" },
    { id: 26, name: "Lương Thị Z", phone: "0965432109", position: "Nhân viên Cắt tóc" },
    { id: 27, name: "Dương Quang AA", phone: "0954321098", position: "Nhân viên Gội đầu" },
    { id: 28, name: "Trần Hoàng BB", phone: "0943210987", position: "Nhân viên Massage" },
    { id: 29, name: "Lý Thị CC", phone: "0932109876", position: "Lễ tân" },
    { id: 30, name: "Hoàng Minh DD", phone: "0921098765", position: "Quản lý" },
    { id: 31, name: "Lê Văn EE", phone: "0910987654", position: "Nhân viên Cắt tóc" },
    { id: 32, name: "Bùi Quang FF", phone: "0909876543", position: "Nhân viên Gội đầu" },
    { id: 33, name: "Võ Thị GG", phone: "0998765432", position: "Nhân viên Massage" },
    { id: 34, name: "Lý Minh HH", phone: "0987654321", position: "Lễ tân" },
    { id: 35, name: "Nguyễn Văn II", phone: "0976543210", position: "Quản lý" },
    { id: 36, name: "Trịnh Quang JJ", phone: "0965432109", position: "Nhân viên Cắt tóc" },
    { id: 37, name: "Đặng Thị KK", phone: "0954321098", position: "Nhân viên Gội đầu" },
    { id: 38, name: "Hoàng Văn LL", phone: "0943210987", position: "Nhân viên Massage" },
    { id: 39, name: "Lê Minh MM", phone: "0932109876", position: "Lễ tân" },
    { id: 40, name: "Nguyễn Văn NN", phone: "0921098765", position: "Quản lý" },
    { id: 41, name: "Trần Văn OO", phone: "0910987654", position: "Nhân viên Cắt tóc" },
    { id: 42, name: "Bùi Minh PP", phone: "0909876543", position: "Nhân viên Gội đầu" },
    { id: 43, name: "Võ Quang QQ", phone: "0998765432", position: "Nhân viên Massage" },
    { id: 44, name: "Trương Thị RR", phone: "0987654321", position: "Lễ tân" },
    { id: 45, name: "Dương Văn SS", phone: "0976543210", position: "Quản lý" },
    { id: 46, name: "Lý Minh TT", phone: "0965432109", position: "Nhân viên Cắt tóc" },
    { id: 47, name: "Mai Thị UU", phone: "0954321098", position: "Nhân viên Gội đầu" },
    { id: 48, name: "Đoàn Văn VV", phone: "0943210987", position: "Nhân viên Massage" },
    { id: 49, name: "Tô Quang WW", phone: "0932109876", position: "Lễ tân" },
    { id: 50, name: "Quách Văn XX", phone: "0921098765", position: "Quản lý" }
];


// Hiển thị danh sách nhân viên
function loadEmployees() {
    let table = document.getElementById("employeeTable");
    table.innerHTML = "";

    employees.forEach((employee, index) => {
        let row = table.insertRow();
        row.innerHTML = `
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.phone}</td>
            <td>${employee.position}</td>
            <td>
                <button class="edit-btn" onclick="editEmployee(${index})">✏ Sửa</button>
                <button class="delete-btn" onclick="deleteEmployee(${index})">🗑 Xóa</button>
            </td>
        `;
    });
}

// Mở form thêm nhân viên
// Mở form thêm nhân viên
function openEmployeeForm() {
    document.getElementById("formTitle").innerText = "Thêm Nhân Viên";
    document.getElementById("employeeId").value = "";
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("position").value = "";
    document.getElementById("employeeForm").style.display = "flex";
}

// Đóng form khi nhấn nút "Hủy"
function closeEmployeeForm() {
    document.getElementById("employeeForm").style.display = "none";
}

// Đóng form khi bấm ra ngoài vùng modal
function closeEmployeeFormOutside(event) {
    if (event.target === document.getElementById("employeeForm")) {
        closeEmployeeForm();
    }
}


// Đóng form
function closeEmployeeForm() {
    document.getElementById("employeeForm").style.display = "none";
}

// Lưu nhân viên mới
function saveEmployee() {
    let id = document.getElementById("employeeId").value;
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let position = document.getElementById("position").value;

    if (name && phone) {
        if (id) {
            employees[id].name = name;
            employees[id].phone = phone;
            employees[id].position = position;
        } else {
            employees.push({
                id: employees.length + 1,
                name,
                phone,
                position
            });
        }
        closeEmployeeForm();
        loadEmployees();
    } else {
        alert("Vui lòng điền đầy đủ thông tin!");
    }
}

// Xóa nhân viên
function deleteEmployee(index) {
    if (confirm("Bạn có chắc muốn xóa nhân viên này?")) {
        employees.splice(index, 1);
        loadEmployees();
    }
}

// Tìm kiếm nhân viên theo từng ký tự
function searchEmployee() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let filtered = employees.filter(e => e.name.toLowerCase().includes(input));
    employees = filtered;
    loadEmployees();
}
