const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Configurar middleware
app.use(cors());
app.use(bodyParser.json());

// Configurar rutas
app.get('/', (req, res) => {
 res.send('¡Hola mundo desde Express JS en EC2!');
});

// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
 console.log(`Servidor Express JS iniciado en el puerto ${port}`);
});
