const express = require("express");
const dotenv = require('dotenv')

dotenv.config();

console.log(process.PORT)

const app = express();

app.use(express.json());

app.get("/signup", (req, res) => {
  const { name, email, password } = req.body;
  res.status(200).send({ name, email, password });
});

app.get("/login", (req, res) => {
    const { name, email, password } = req.body;
    res.status(200).send({ name, email, password });
  });
  

app.use((req, res) => {
  res.status(400).send("Not Found");
});

app.listen(8000);
