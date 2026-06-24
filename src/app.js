import express from "express";
import cors from "cors";
const app = express();

// basic middleware configuration
app.use(
  express.json({
    limit: "64kb",
  }),
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "64kb",
  }),
);

app.use(express.static("public"));

// cors configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
  }),
);

app.get("/", (req, res) => {
  res.send("Hello World !");
});

app.get("/health", (req, res) => {
  res.send("Api is healthy... ");
});

export default app;
