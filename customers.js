document.addEventListener("DOMContentLoaded", function() {
    loadCustomers();
});

// Danh sách khách hàng (50 khách hàng mẫu)
let customers = [
    { id: 1, name: "Nguyễn Văn A", phone: "0123456789", history: "Cắt tóc, Gội đầu" },
    { id: 2, name: "Trần Thị B", phone: "0987654321", history: "Nhuộm tóc, Massage" },
    { id: 3, name: "Phạm Văn C", phone: "0345678912", history: "Uốn tóc, Cạo mặt" },
    { id: 4, name: "Lê Hoàng D", phone: "0912345678", history: "Cạo râu, Gội đầu" },
    { id: 5, name: "Đỗ Thị E", phone: "0367891234", history: "Làm móng, Chăm sóc da" },
    { id: 6, name: "Hoàng Văn F", phone: "0789456123", history: "Cắt tóc, Uốn tóc" },
    { id: 7, name: "Nguyễn Thị G", phone: "0834567891", history: "Tẩy tế bào chết, Gội đầu" },
    { id: 8, name: "Bùi Minh H", phone: "0921345678", history: "Massage đầu, Dưỡng tóc" },
    { id: 9, name: "Lâm Quang I", phone: "0967456123", history: "Nhuộm tóc, Cắt tóc" },
    { id: 10, name: "Võ Thị J", phone: "0887654321", history: "Uốn tóc, Làm móng" },
    { id: 11, name: "Phan Văn K", phone: "0901234567", history: "Cạo râu, Gội đầu" },
    { id: 12, name: "Lý Hoàng L", phone: "0334567891", history: "Cắt tóc, Massage" },
    { id: 13, name: "Trương Mỹ M", phone: "0989765432", history: "Dưỡng tóc, Làm móng" },
    { id: 14, name: "Nguyễn Văn N", phone: "0931234567", history: "Uốn tóc, Gội đầu" },
    { id: 15, name: "Trịnh Văn O", phone: "0812345678", history: "Massage đầu, Cạo râu" },
    { id: 16, name: "Tô Thị P", phone: "0845678912", history: "Tẩy tế bào chết, Dưỡng tóc" },
    { id: 17, name: "Vũ Hoàng Q", phone: "0956781234", history: "Nhuộm tóc, Làm móng" },
    { id: 18, name: "Lê Minh R", phone: "0890123456", history: "Cạo râu, Gội đầu" },
    { id: 19, name: "Đặng Văn S", phone: "0998765432", history: "Cắt tóc, Massage" },
    { id: 20, name: "Mai Thị T", phone: "0702345678", history: "Uốn tóc, Chăm sóc da" },
    { id: 21, name: "Nguyễn Thị U", phone: "0789123456", history: "Gội đầu, Cạo râu" },
    { id: 22, name: "Đoàn Văn V", phone: "0834567890", history: "Massage, Nhuộm tóc" },
    { id: 23, name: "Quách Minh W", phone: "0912345671", history: "Làm móng, Dưỡng tóc" },
    { id: 24, name: "Trịnh Văn X", phone: "0945678912", history: "Cắt tóc, Gội đầu" },
    { id: 25, name: "Nguyễn Văn Y", phone: "0956123789", history: "Cạo râu, Tẩy tế bào chết" },
    { id: 26, name: "Lương Thị Z", phone: "0987654312", history: "Uốn tóc, Massage đầu" },
    { id: 27, name: "Dương Quang AA", phone: "0881234567", history: "Nhuộm tóc, Cạo râu" },
    { id: 28, name: "Trần Hoàng BB", phone: "0794567890", history: "Dưỡng tóc, Làm móng" },
    { id: 29, name: "Lý Thị CC", phone: "0967456123", history: "Gội đầu, Cắt tóc" },
    { id: 30, name: "Hoàng Minh DD", phone: "0934567891", history: "Massage đầu, Uốn tóc" },
    { id: 31, name: "Lê Văn EE", phone: "0890123456", history: "Nhuộm tóc, Gội đầu" },
    { id: 32, name: "Bùi Quang FF", phone: "0812345678", history: "Cạo râu, Làm móng" },
    { id: 33, name: "Võ Thị GG", phone: "0998765432", history: "Dưỡng tóc, Tẩy tế bào chết" },
    { id: 34, name: "Lý Minh HH", phone: "0789123456", history: "Massage, Uốn tóc" },
    { id: 35, name: "Nguyễn Văn II", phone: "0702345678", history: "Cạo râu, Cắt tóc" },
    { id: 36, name: "Trịnh Quang JJ", phone: "0956123789", history: "Làm móng, Dưỡng tóc" },
    { id: 37, name: "Đặng Thị KK", phone: "0945678912", history: "Nhuộm tóc, Gội đầu" },
    { id: 38, name: "Hoàng Văn LL", phone: "0912345671", history: "Massage đầu, Cạo râu" },
    { id: 39, name: "Lê Minh MM", phone: "0834567890", history: "Tẩy tế bào chết, Dưỡng tóc" },
    { id: 40, name: "Nguyễn Văn NN", phone: "0934567891", history: "Uốn tóc, Gội đầu" },
    { id: 41, name: "Trần Văn OO", phone: "0887654321", history: "Cắt tóc, Massage" },
    { id: 42, name: "Bùi Minh PP", phone: "0845678912", history: "Nhuộm tóc, Cạo râu" },
    { id: 43, name: "Võ Quang QQ", phone: "0702345678", history: "Dưỡng tóc, Làm móng" },
    { id: 44, name: "Trương Thị RR", phone: "0967456123", history: "Cạo râu, Gội đầu" },
    { id: 45, name: "Dương Văn SS", phone: "0956781234", history: "Massage đầu, Uốn tóc" },
    { id: 46, name: "Lý Minh TT", phone: "0989765432", history: "Tẩy tế bào chết, Dưỡng tóc" },
    { id: 47, name: "Mai Thị UU", phone: "0921345678", history: "Nhuộm tóc, Làm móng" },
    { id: 48, name: "Đoàn Văn VV", phone: "0789123456", history: "Cạo râu, Gội đầu" },
    { id: 49, name: "Tô Quang WW", phone: "0834567890", history: "Cắt tóc, Massage" },
    { id: 50, name: "Quách Văn XX", phone: "0912345671", history: "Uốn tóc, Gội đầu" }
];


// Hiển thị danh sách khách hàng
function loadCustomers() {
    let table = document.getElementById("customerTable");
    table.innerHTML = ""; // Xóa danh sách cũ

    customers.forEach((customer, index) => {
        let row = table.insertRow();
        row.innerHTML = `
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.phone}</td>
            <td>${customer.history}</td>
            <td>
                <button class="edit-btn" onclick="editCustomer(${index})">✏ Sửa</button>
                <button class="delete-btn" onclick="deleteCustomer(${index})">🗑 Xóa</button>
            </td>
        `;
    });
}

// Mở form thêm khách hàng
function openCustomerForm() {
    document.getElementById("formTitle").innerText = "Thêm Khách Hàng";
    document.getElementById("customerId").value = "";
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("history").value = "";
    document.getElementById("customerForm").style.display = "flex";
}

// Đóng form
function closeCustomerForm() {
    document.getElementById("customerForm").style.display = "none";
}

// Lưu hoặc cập nhật khách hàng
function saveCustomer() {
    let id = document.getElementById("customerId").value;
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let history = document.getElementById("history").value;

    if (name && phone) {
        if (id) {
            customers[id].name = name;
            customers[id].phone = phone;
            customers[id].history = history || "(Không có)";
        } else {
            customers.push({
                id: customers.length + 1,
                name,
                phone,
                history: history || "(Không có)"
            });
        }
        closeCustomerForm();
        loadCustomers();
    } else {
        alert("Vui lòng điền đầy đủ thông tin!");
    }
}

// Xóa khách hàng
function deleteCustomer(index) {
    if (confirm("Bạn có chắc muốn xóa khách hàng này?")) {
        customers.splice(index, 1);
        loadCustomers();
    }
}

// Chỉnh sửa khách hàng
function editCustomer(index) {
    document.getElementById("formTitle").innerText = "Sửa Khách Hàng";
    document.getElementById("customerId").value = index;
    document.getElementById("name").value = customers[index].name;
    document.getElementById("phone").value = customers[index].phone;
    document.getElementById("history").value = customers[index].history;
    document.getElementById("customerForm").style.display = "flex";
}

// Tìm kiếm khách hàng theo từng ký tự trong họ tên
function searchCustomer() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let filteredCustomers = customers.filter(customer => 
        customer.name.toLowerCase().includes(input)
    );
    
    let table = document.getElementById("customerTable");
    table.innerHTML = ""; // Xóa danh sách cũ

    filteredCustomers.forEach((customer, index) => {
        let row = table.insertRow();
        row.innerHTML = `
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.phone}</td>
            <td>${customer.history}</td>
            <td>
                <button class="edit-btn" onclick="editCustomer(${index})">✏ Sửa</button>
                <button class="delete-btn" onclick="deleteCustomer(${index})">🗑 Xóa</button>
            </td>
        `;
    });
}
