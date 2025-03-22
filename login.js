function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    if (email.includes("@gmail.com")) {
        message.style.color = "green";
        message.textContent = "✅ Đăng nhập thành công!";
        setTimeout(() => {
            window.location.href = "index.html"; // Chuyển hướng đến trang chính
        }, 1000);
    } else {
        message.style.color = "red";
        message.textContent = "❌ Email phải là @gmail.com!";
    }
}
