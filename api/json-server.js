// /api/json-server.js
import jsonServer from 'json-server';
import cors from 'cors';

export default function handler(req, res) {
  const server = jsonServer.create();
  const router = jsonServer.router('./db.json');
  const middlewares = jsonServer.defaults();

  server.use(cors());
  server.use(middlewares);
  server.use(router);

  server(req, res);
}
