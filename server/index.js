const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("sdfsdf");
});
app.post("/signup", (req, res) => {});
app.post("/login", (req, res) => {
  res.send("login");
});
app.listen(4000, () => {
  console.log("server started");
});
