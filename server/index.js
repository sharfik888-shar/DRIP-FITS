const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Здесь будут храниться игроки
let players = [];

// 1. Игра отправляет сюда данные
app.post('/update', (req, res) => {
    const { username, money } = req.body;
    
    let player = players.find(p => p.username === username);
    
    if (player) {
        player.money = money; 
    } else {
        players.push({ username, money });
    }
    
    res.json({ status: "ok" });
});

// 2. Игра просит список для Топа
app.get('/top', (req, res) => {
    let sorted = players.sort((a, b) => b.money - a.money);
    res.json(sorted.slice(0, 50)); 
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Сервер работает!'));
