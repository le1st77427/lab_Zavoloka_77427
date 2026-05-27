const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api/hello', (req, res) => {
  res.json({
    imie: "Oleksandr",
    nazwisko: "Zavoloka",
    indeks: "77427"
  });
});

app.listen(port, () => {
  console.log(`Serwer uruchomiony! Otwórz http://localhost:${port} w przeglądarce.`);
});