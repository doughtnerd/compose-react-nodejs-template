const express = require("express");

const server = express();

server.get("/", (req, res) => {
  return res.status(200).json({message: "OKAY!!!"});
});

server.listen(3005, () => {
  console.log("Server started");
});

process.on("SIGINT", () => {
  console.log("Interrupt detected, exiting...");
  process.exit(0);
});

process.on("SIGTERM", () => {
  console.log("Terminate detected");
});

