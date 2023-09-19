const express = require("express");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let USERS = [];

let user_Path = "./files/users.json";

try {
  USERS = JSON.parse(fs.readFileSync(user_Path, "utf8"));
} catch {
  USERS = [];
}

console.log(USERS);

//authentication
const SECRET = "my-secret-key";

const authenticateJwtuser = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader);
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    console.log(token);
    jwt.verify(token, SECRET, (err, user) => {
      if (err) {
        // console.log("returen from here");
        return res.sendStatus(403);
      }
      console.log("hererrerererer", user);
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

app.post("/signup", (req, res) => {
  //   console.log(req.body);
  const { username, email, password } = req.body;
  const user = USERS.find((a) => {
    a.email === email;
  });
  if (user) res.status(403).json({ message: "User already exists" });
  const newUser = { username, email, password };
  USERS.push(newUser);
  fs.writeFileSync(user_Path, JSON.stringify(USERS));
  const token = jwt.sign({ email }, SECRET, { expiresIn: "1h" });
  res.json({ message: "User registered successfully,Please Login !", token });
});

app.post("/login", (req, res) => {
  const { email, password } = req.headers;
  const user = USERS.find((a) => a.email === email && a.password === password);
  if (user) {
    const token = jwt.sign({ email }, SECRET, {
      expiresIn: "1h",
    });
    res.json({ message: "Logged in successfully", token });
  } else {
    res.status(403).json({ message: "Invalid username or password" });
  }
});

app.get("/me", authenticateJwtuser, (req, res) => {
  console.log("thidvghbnjghjnmbkjhk1", req.user);
  res.json({ email: req.user.email });
});

app.listen(4000, () => {
  console.log("server started");
});
