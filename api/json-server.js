// /api/json-server.js
import jsonServer from 'json-server';
import cors from 'cors';
import { createServer } from 'http';

// Crea l'istanza del server JSON
const server = jsonServer.create();
const router = jsonServer.router('./src/db.json');
const middlewares = jsonServer.defaults();

// Usa CORS per gestire le richieste cross-origin
server.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type, Authorization',
}));

server.use(middlewares);
server.use(router);

// Crea e avvia il server HTTP
const httpServer = createServer(server);

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});

export default (req, res) => server(req, res);
