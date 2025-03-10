// script.js
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Hiển thị thông báo
    document.getElementById('response-message').innerText = `Cảm ơn ${name}! Chúng tôi đã nhận được thông tin của bạn.`;

    // Reset form
    this.reset();
});