import express from "express";
import { User } from "@demo/commons";

const app = express();

const createUser = (): User => ({
  id: 1,
  name: "the user",
});

app.get("/hello", (_, res) => {
  res.send("world\n");
});

app.get("/world", (_, res) => {
  res.send("hello\n");
});

app.post("/create", (_, res) => {
  res.json(createUser());
});

app.listen(3000, () => {
  console.log("@demo/server is listening at port 3000");
});
