import express from "express";
import cors from "cors";

const server = express();

server.use(cors());

server.use(express.json());

const PORT = 5000;

const usersData = [];

server.post("/sign-up", (req, res) => {
  let { username, avatar } = req.body;
  let userData = {
    username,
    avatar,
  };
  usersData.push(userData);

  res.send("OK");
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
