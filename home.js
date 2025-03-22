// Kiểm tra trạng thái đăng nhập
function updateLoginButton() {
    var user = localStorage.getItem("loggedInUser");
    var loginLogoutBtn = document.getElementById("loginLogoutBtn");

    if (user) {
        loginLogoutBtn.innerText = "Đăng Xuất";
        loginLogoutBtn.classList.add("logout");
    } else {
        loginLogoutBtn.innerText = "Đăng Nhập";
        loginLogoutBtn.classList.remove("logout");
    }
}

// Xử lý đăng nhập hoặc đăng xuất
function handleLoginLogout() {
    var user = localStorage.getItem("loggedInUser");

    if (user) {
        localStorage.removeItem("loggedInUser");
        alert("Bạn đã đăng xuất!");
        window.location.href = "login.html";
    } else {
        window.location.href = "login.html";
    }
}

// Đảm bảo khi tải trang, nút được cập nhật đúng
updateLoginButton();
