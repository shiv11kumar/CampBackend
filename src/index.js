import dotenv from "dotenv";
import express from "express";

dotenv.config({
  path: "./.env",
});

const app = express();
const port = process.env.port || 3000;

app.get("/", (req, res) => {
  res.send("Hello World !");
});

app.get("/health", (req, res) => {
  res.send("Api  ");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
