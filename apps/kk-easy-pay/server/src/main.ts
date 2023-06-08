import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import yargs from 'yargs-parser';

async function startApiServer(serverPort: number, serverIp: string) {
  const app = express();
  const server = http.createServer(app);

  app.use(bodyParser.json());

  app.use('/', (req, res) => {
    res.send('Called ' + req.url);
  });

  server.listen(serverPort, serverIp, undefined, () => {
    console.log(`Server online on http://${serverIp}:${serverPort}`);
  });
}

(async () => {
  const argv = yargs(process.argv.slice(2));

  const port = argv.port;
  const ip = argv.ip;

  await startApiServer(port, ip);
})();
