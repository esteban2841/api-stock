const {Server} = require('socket.io');
const http = require('http');
const axios = require('axios');
require("dotenv").config();

const httpServer = http.createServer()
const io = new Server(httpServer, {
    cors: {
      origin: ["http://localhost:3001", "http://localhost:3000"],
      methods: ['GET', 'POST'],
    },
  });


  io.on('connection', (socket) => {
    console.log('Nuevo cliente conectado:', socket.id);

    // Escuchar mensajes del cliente
    socket.on('getStockPrice', async () => {
      const symbol = 'AAPL'; // Fixed symbol
      const newSymbolPrice = await axios.get(`${process.env.BACKEND_URI}/api/stock/generate-price/AAPL`)
      const priceSymbolUpdate = await newSymbolPrice.data
      
      // Obtener el stock de MongoDB
      setInterval(() => {
 
        if (priceSymbolUpdate) {
          // Enviar el stock actualizado al cliente
          socket.emit('symbolPriceUpdate', priceSymbolUpdate);
        }
        
      }, 5000) // Every 15 seconds

    });

    socket.on('disconnect', () => {
    });
  });

  // Iniciar el servidor
  const PORT = 3002; // Cambia el puerto si es necesario
  httpServer.listen(PORT, () => {
    console.log(`Servidor socket.io corriendo en http://localhost:${PORT}`);
  });