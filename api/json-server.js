// /api/json-server.js
import jsonServer from 'json-server';
import cors from 'cors';

// Crea l'istanza del server JSON
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();

// Usa CORS per gestire le richieste cross-origin
server.use(cors({
  origin: '*', // Permette tutte le origini
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type, Authorization',
}));

server.use(middlewares);
server.use(router);

export default (req, res) => server(req, res);
