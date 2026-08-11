// 1. Importação dos módulos via CommonJS 
const express = require('express'); 
const path = require('path'); 
const app = express(); 
const PORT = 3000; 
// 2. Servir arquivos estáticos (CSS, imagens, JS do cliente) 
// A variável __dirname existe nativamente no CommonJS 
app.use(express.static(path.join(__dirname, 'frontend'))); 
// 3. Rota principal que entrega o HTML da tela de Login 
app.get('/', (req, res) => { 
res.sendFile(path.join(__dirname, 'frontend', 'index.html')); 
}); 
// 4. Inicialização do servidor 
app.listen(PORT, () => { 
console.log(`[CJS] Servidor de Login rodando em 
http://localhost:${PORT}`); 
}); 