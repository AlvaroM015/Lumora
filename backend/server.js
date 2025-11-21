// Lumora - Backend Node/Express
// Rota: /api/professions -> devolve o mesmo JSON usado pela SPA

const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Libera CORS para permitir que a SPA (em outra porta) consuma a API
app.use(cors());

// Rota principal da API de profissões
app.get('/api/professions', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'professions.json');

  fs.readFile(filePath, 'utf8', (err, fileData) => {
    if (err) {
      console.error('Erro ao ler professions.json:', err);
      return res
        .status(500)
        .json({ error: 'Erro ao carregar dados de profissões' });
    }

    try {
      const professions = JSON.parse(fileData);
      if (!Array.isArray(professions)) {
        throw new Error('JSON de profissões não é uma lista/array.');
      }
      return res.json(professions);
    } catch (parseError) {
      console.error('Erro ao processar JSON de profissões:', parseError);
      return res
        .status(500)
        .json({ error: 'Erro ao processar dados de profissões' });
    }
  });
});

// Sobe o servidor
app.listen(PORT, () => {
  console.log(`✅ Lumora Backend rodando em http://localhost:${PORT}`);
  console.log('➡  Rota de profissões: /api/professions');
});
