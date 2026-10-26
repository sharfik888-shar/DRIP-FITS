// Вставь свою ссылку из Render сюда
const SERVER_URL = "https://твой-сервер.onrender.com"; 

// Функция сохранения (вызывай её, когда игрок тапает или заходит в игру)
async function saveProgress() {
    const username = "@твой_ник"; // Позже тут будет ник из Telegram
    const money = 12345; // Тут твои текущие деньги в игре
    
    await fetch(`${SERVER_URL}/update`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username, money: money })
    });
}
