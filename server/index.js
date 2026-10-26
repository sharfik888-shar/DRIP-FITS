const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Тут храним игроков: ник, деньги, уровень, коллекция
let players = [];

// 1. Игра отправляет сюда данные
app.post('/update', (req, res) => {
    const { username, money, xp, colVal } = req.body;
    
    let player = players.find(p => p.username === username);
    
    if (player) {
        player.money = money; 
        player.xp = xp;
        player.colVal = colVal;
    } else {
        players.push({ username, money, xp, colVal });
    }
    
    res.json({ status: "ok" });
});

// 2. Игра просит список для Топа
app.get('/top', (req, res) => {
    // Возвращаем ВСЕХ игроков. Фронтенд сам их отсортирует как надо.
    res.json(players); 
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Сервер работает!'));
