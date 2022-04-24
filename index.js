const express = require("express");
const { connectDB } = require("./database/connectDB");
const app = express();
const cors = require("cors");

connectDB();

app.use(cors());

app.use(express.json({ extended: true }));

app.get("/", (req, res, next) => {
  return res.json({ message: "hello world" });
});

app.use("/api", require("./routes/api"));

const PORT = process.env.PORT || 3010;

app.listen(PORT, () => console.log(`app running on port: ${PORT}`));
