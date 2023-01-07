import express from "express";
import cors from "cors";

const server = express();

server.use(cors());

server.use(express.json());

const PORT = 5000;

let userData = {};
const usersData = [];
const tweetsData = [];

server.post("/sign-up", (req, res) => {
  let { username, avatar } = req.body;
  let user = {
    username,
    avatar,
  };
  userData = { ...user };
  usersData.push(user);

  res.send("OK");
});

server.post("/tweets", (req, res) => {
  let { username, tweet } = req.body;

  let user = usersData.find(user => user.username === username)
  
  if(!user) {
    return res.send("UNAUTHORIZED")
  }

  let tweetData = {
    username,    
    avatar: userData.avatar,
    tweet,
  };
  tweetsData.push(tweetData);

  res.send("OK");
});

server.get("/tweets", (req, res) => {
  if(tweetsData.length === 0) {
  return  res.send(tweetsData);
  }
  let lastTenTweets = tweetsData.slice(-10).reverse();

  res.send(lastTenTweets);
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
