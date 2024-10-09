document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // 这里应该发送登录请求到服务器
        // 现在我们只是模拟一个简单的登录逻辑
        if (username === 'admin' && password === 'password') {
            alert('登录成功！');
            // 这里可以重定向到管理面板页面
            // window.location.href = 'admin-panel.html';
        } else {
            alert('用户名或密码错误！');
        }
    });
});