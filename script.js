document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "123456") {
        window.location.href = "dashboard.html"; // Chuyển đến trang chính sau khi đăng nhập thành công
    } else {
        document.getElementById("errorMessage").innerText = "Sai tên đăng nhập hoặc mật khẩu!";
    }
});
