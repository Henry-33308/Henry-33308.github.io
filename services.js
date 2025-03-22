document.addEventListener("DOMContentLoaded", function() {
    loadServices();
});

// Danh sách dịch vụ có sẵn với mô tả chi tiết
let services = [
    { id: 1, name: "Cắt tóc nam", price: 100000, description: "Cắt tóc nam theo phong cách hiện đại, gọn gàng." },
    { id: 2, name: "Cắt tóc nữ", price: 150000, description: "Cắt tóc nữ theo xu hướng mới nhất, tạo kiểu đẹp." },
    { id: 3, name: "Nhuộm tóc", price: 300000, description: "Nhuộm tóc với màu sắc đa dạng, giữ màu lâu." },
    { id: 4, name: "Uốn tóc", price: 400000, description: "Uốn tóc tự nhiên, bồng bềnh, giữ nếp lâu dài." },
    { id: 5, name: "Dưỡng tóc", price: 250000, description: "Dưỡng tóc chuyên sâu, phục hồi tóc hư tổn." }
];

// Danh sách dịch vụ bổ sung với mô tả
let additionalServices = [
    { name: "Cắt tóc layer nữ", price: 180000, description: "Cắt tóc layer tạo kiểu bồng bềnh, trẻ trung." },
    { name: "Cắt tóc undercut nam", price: 120000, description: "Tạo kiểu undercut nam gọn gàng, mạnh mẽ." },
    { name: "Uốn tóc setting", price: 500000, description: "Uốn tóc setting giữ nếp lâu, tạo kiểu tự nhiên." },
    { name: "Duỗi tóc collagen", price: 450000, description: "Duỗi tóc bằng collagen giúp tóc mềm mượt hơn." },
    { name: "Hấp dầu phục hồi tóc", price: 250000, description: "Hấp dầu giúp tóc bóng mượt, phục hồi hư tổn." },
    { name: "Gội đầu dưỡng sinh", price: 150000, description: "Gội đầu kết hợp massage thư giãn, lưu thông máu." },
    { name: "Massage da đầu", price: 200000, description: "Massage da đầu giúp giảm stress, kích thích mọc tóc." },
    { name: "Tẩy tóc bạch kim", price: 600000, description: "Tẩy tóc màu bạch kim cực sáng, lên màu chuẩn." },
    { name: "Nhuộm highlight", price: 350000, description: "Nhuộm highlight giúp tóc nổi bật và cá tính hơn." },
    { name: "Phủ bóng tóc", price: 280000, description: "Phủ bóng giúp tóc mềm mượt, bóng khỏe tự nhiên." }
];

// Thêm danh sách mở rộng vào mảng services
services = services.concat(additionalServices.map((s, index) => ({
    id: services.length + index + 1,
    ...s
})));

// Hiển thị danh sách dịch vụ
function loadServices() {
    let table = document.getElementById("serviceTable");
    table.innerHTML = "";

    services.forEach((service, index) => {
        let row = table.insertRow();
        row.innerHTML = `
            <td>${service.id}</td>
            <td>${service.name}</td>
            <td>${service.price.toLocaleString()} VNĐ</td>
            <td>${service.description}</td>
            <td>
                <button class="edit-btn" onclick="editService(${index})">✏ Sửa</button>
                <button class="delete-btn" onclick="deleteService(${index})">🗑 Xóa</button>
            </td>
        `;
    });

    // Cập nhật danh sách dropdown trong form
    updateServiceDropdown();
}

// Cập nhật danh sách chọn dịch vụ trong form
function updateServiceDropdown() {
    let select = document.getElementById("name");
    select.innerHTML = `<option value="">Chọn dịch vụ...</option>`; // Reset danh sách

    services.forEach(service => {
        let option = document.createElement("option");
        option.value = service.name;
        option.textContent = service.name;
        option.setAttribute("data-price", service.price);
        option.setAttribute("data-description", service.description);
        select.appendChild(option);
    });
}

// Tự động cập nhật giá và mô tả khi chọn dịch vụ
function updatePriceAndDescription() {
    let serviceSelect = document.getElementById("name");
    let selectedOption = serviceSelect.options[serviceSelect.selectedIndex];
    let priceInput = document.getElementById("price");
    let descriptionInput = document.getElementById("description");

    if (selectedOption.dataset.price) {
        priceInput.value = selectedOption.dataset.price;
    } else {
        priceInput.value = "";
    }

    if (selectedOption.dataset.description) {
        descriptionInput.value = selectedOption.dataset.description;
    } else {
        descriptionInput.value = "";
    }
}

// Mở form thêm dịch vụ
function openServiceForm() {
    document.getElementById("formTitle").innerText = "Thêm Dịch Vụ";
    document.getElementById("serviceId").value = "";
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("description").value = "";
    document.getElementById("serviceForm").style.display = "flex";
}

// Đóng form
function closeServiceForm() {
    document.getElementById("serviceForm").style.display = "none";
}

// Lưu dịch vụ mới
function saveService() {
    let id = document.getElementById("serviceId").value;
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let description = document.getElementById("description").value || "Không có mô tả";

    if (name && price) {
        if (id) {
            services[id].name = name;
            services[id].price = price;
            services[id].description = description;
        } else {
            services.push({
                id: services.length + 1,
                name,
                price: parseInt(price),
                description
            });
        }
        closeServiceForm();
        loadServices();
    } else {
        alert("Vui lòng điền đầy đủ thông tin!");
    }
}

// Xóa dịch vụ
function deleteService(index) {
    if (confirm("Bạn có chắc muốn xóa dịch vụ này?")) {
        services.splice(index, 1);
        loadServices();
    }
}

// Chỉnh sửa dịch vụ
function editService(index) {
    document.getElementById("formTitle").innerText = "Sửa Dịch Vụ";
    document.getElementById("serviceId").value = index;
    document.getElementById("name").value = services[index].name;
    document.getElementById("price").value = services[index].price;
    document.getElementById("description").value = services[index].description;
    document.getElementById("serviceForm").style.display = "flex";
}

// Tìm kiếm dịch vụ theo tên
function searchService() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let filtered = services.filter(s => s.name.toLowerCase().includes(input));

    let table = document.getElementById("serviceTable");
    table.innerHTML = "";

    filtered.forEach((service, index) => {
        let row = table.insertRow();
        row.innerHTML = `
            <td>${service.id}</td>
            <td>${service.name}</td>
            <td>${service.price.toLocaleString()} VNĐ</td>
            <td>${service.description}</td>
            <td>
                <button class="edit-btn" onclick="editService(${index})">✏ Sửa</button>
                <button class="delete-btn" onclick="deleteService(${index})">🗑 Xóa</button>
            </td>
        `;
    });
}
