import express from "express";

const app = express();

app.get("/hello", (req, res) => {
  res.send("world\n");
});

app.get("/world", (req, res) => {
  res.send("hello\n");
});

app.listen(3000, () => {
  console.log("@demo/server is listening at port 3000");
});
