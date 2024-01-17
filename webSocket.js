const http = require("http");
const express = require("express");
const websocketServer = require("websocket").server;

const app = express();
const server = http.createServer(app);

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

server.listen(9090, () => console.log("WebSocket Server Listening on 9090"));

const wsServer = new websocketServer({
  httpServer: server,
});

// Hashmap to store clients and games
const clients = {};
const games = {};

wsServer.on("request", (request) => {
  // Connect
  const connection = request.accept(null, request.origin);
  connection.on("open", () => console.log("WebSocket Connection Opened!"));
  connection.on("close", () => console.log("WebSocket Connection Closed!"));

  connection.on("message", (message) => {
    const result = JSON.parse(message.utf8Data);

    // User wants to create a new game room
    if (result.method === "create") {
      const clientId = result.clientId;
      const gameId = guid();
      games[gameId] = {
        id: gameId,
        players: 0,
      };

      const payLoad = {
        method: "create",
        game: games[gameId],
      };

      const con = clients[clientId].connection;
      con.send(JSON.stringify(payLoad));
    }

    // User wants to join a game room
    if (result.method === "join") {
      const clientId = result.clientId;
      const gameId = result.gameId;
      const game = games[gameId];

      if (game.players >= 5) {
        // Max players reached
        return;
      }

      const color = ["Red", "Green", "Blue", "Yellow", "Violet"][game.players];
      game.players++;

      const payLoad = {
        method: "join",
        game,
        color,
      };

      // Loop through all clients and tell them that someone has joined
      Object.values(clients).forEach((client) => {
        client.connection.send(JSON.stringify(payLoad));
      });
    }

    // Additional game logic for a stock market game can be added here

  });

  // Generate a new clientId
  const clientId = guid();
  clients[clientId] = {
    connection,
  };

  const payLoad = {
    method: "connect",
    clientId,
  };

  // Send back the client connection message
  connection.send(JSON.stringify(payLoad));
});

// Function to periodically update game state
function updateGameState() {
  for (const g of Object.keys(games)) {
    const game = games[g];
    const payLoad = {
      method: "update",
      game,
    };

    // Send the updated game state to all connected clients
    Object.values(clients).forEach((client) => {
      client.connection.send(JSON.stringify(payLoad));
    });
  }

  setTimeout(updateGameState, 500);
}

// Start the periodic update of game state
updateGameState();

function S4() {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

// Function to generate a new GUID
const guid = () =>
  (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
