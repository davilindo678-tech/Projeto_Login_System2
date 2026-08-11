// 1. Importação dos módulos via ES Modules 
import express from 'express'; 
import path from 'path'; 
import { fileURLToPath } from 'url'; 
// 2. No ESM, precisamos simular a variável __dirname 
const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename); 
const app = express(); 
const PORT = 3000; 
// 3. Servir arquivos estáticos 
app.use(express.static(path.join(__dirname, 'frontend'))); 
// 4. Rota principal para a página de login 
app.get('/', (req, res) => { 
res.sendFile(path.join(__dirname, 'frontend', 'index.html')); 
}); 
// 5. Inicialização do servidor 
app.listen(PORT, () => { 
console.log(`[ESM] Servidor de Login rodando em 
http://localhost:${PORT}`); 
});