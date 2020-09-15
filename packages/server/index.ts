import express from "express";

const app = express();

app.get("/hello", (_, res) => {
  res.send("world\n");
});

app.get("/world", (_, res) => {
  res.send("hello\n");
});

app.listen(3000, () => {
  console.log("@demo/server is listening at port 3000");
});
