const express = require("express");
const http = require("http");
const Server = require("socket.io").Server;

async function ServerStart() {
  const app = express();

  const server = http.createServer(app);
  const io = new Server(server, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", (socket) => {
    console.log("Connected");

    socket.on("chat", (chat) => {
      io.emit("chat", chat);
    });

    socket.on("disconnect", () => {
      console.log("disconnect");
    });
  });

  server.listen("3001", () => {
    console.log("Running in port 3001");
  });
}

ServerStart();
