// 1. Зберігання даних про ОС та браузер у localStorage [cite: 114, 116]
const browserInfo = navigator.userAgent; // Отримуємо дані про систему та браузер
localStorage.setItem('os_browser_info', browserInfo); // Зберігаємо в пам'ять
// Виводимо у футер [cite: 117]
document.getElementById('footer-info').textContent = "Ваша система: " + localStorage.getItem('os_browser_info');


// 2. Отримання коментарів із сервера [cite: 118]
// Використовуємо пост №9 (твій варіант) 
fetch('https://jsonplaceholder.typicode.com/posts/9/comments')
    .then(response => response.json())
    .then(comments => {
        const container = document.getElementById('comments-container');
        container.innerHTML = ''; // Очищаємо текст "Завантаження..."
        
        // Відображаємо коментарі по черзі [cite: 121]
        comments.forEach(comment => {
            const div = document.createElement('div');
            div.className = 'comment-box';
            div.innerHTML = `<h4>${comment.name} (${comment.email})</h4><p>${comment.body}</p>`;
            container.appendChild(div);
        });
    })
    .catch(error => console.error('Помилка завантаження коментарів:', error));


// 3. Форма зворотного зв'язку [cite: 122]
const modal = document.getElementById('feedback-modal');
const closeModal = document.getElementById('close-modal');

// Показуємо форму через 1 хвилину (60000 мілісекунд) [cite: 123, 124]
setTimeout(() => {
    modal.style.display = 'flex';
}, 60000);

// Закриття форми на хрестик
closeModal.onclick = () => {
    modal.style.display = 'none';
}


// 4. Перехід на нічний/денний режим 
const themeToggleBtn = document.getElementById('theme-toggle');

// Автоматичне перемикання залежно від часу [cite: 147]
const currentHour = new Date().getHours();
// Якщо час до 07:00 АБО після 21:00 - нічна тема [cite: 148]
if (currentHour < 7 || currentHour >= 21) {
    document.body.classList.add('dark-theme');
}

// Кнопка для ручного перемикання теми [cite: 146]
themeToggleBtn.onclick = () => {
    document.body.classList.toggle('dark-theme');
};