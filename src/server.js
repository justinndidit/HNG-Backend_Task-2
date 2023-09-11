const http = require("http");
const app = require("./app");
const dbConnection = require("./config/dbConnection");

const server = http.createServer(app);

port = process.env.PORT || 3000;

server.listen(port, async () => {
  await dbConnection();
  console.log(`Listening on port ${port}`);
});
