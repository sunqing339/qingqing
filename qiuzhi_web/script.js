document.addEventListener('DOMContentLoaded', (event) => {
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const message = userInput.value.trim();
        if (message) {
            addMessage('user', message);
            userInput.value = '';
            // 这里应该发送消息到后端AI处理
            // 现在我们只是模拟一个简单的回复
            setTimeout(() => {
                addMessage('ai', '谢谢您的消息。我是一个AI助手,很高兴为您服务。');
            }, 1000);
        }
    }

    function addMessage(sender, text) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender + '-message');
        messageElement.textContent = text;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const aiInput = document.getElementById('ai-input');
    const aiSubmit = document.getElementById('ai-submit');
    const aiResponse = document.getElementById('ai-response');

    aiSubmit.addEventListener('click', function() {
        const userInput = aiInput.value.trim();
        if (userInput) {
            // 这里应该是向AI API发送请求的代码
            // 为了演示，我们使用一个模拟的响应
            simulateAIResponse(userInput);
        }
    });

    function simulateAIResponse(input) {
        aiResponse.style.display = 'block';
        aiResponse.textContent = '正在思考...';
        
        setTimeout(() => {
            aiResponse.textContent = `您问了："${input}"。这是一个模拟的AI响应。在实际应用中，这里会显示来自AI的真实回答。`;
        }, 1500);
    }

    // 修改分类卡片的点击事件处理
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // 移除 e.preventDefault();
            const category = this.getAttribute('data-category');
            const url = this.getAttribute('href');
            navigateToCategory(category, url);
        });
    });

    function navigateToCategory(category, url) {
        console.log(`Navigating to category: ${category}`);
        
        // 如果需要在跳转前执行一些操作，可以在这里添加
        // 例如，显示加载动画或者记录点击事件等

        // 跳转到指定的URL
        window.location.href = url;
    }
});