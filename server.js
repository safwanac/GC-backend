const express = require("express");
const connectDB = require("./config/db");
const router = require("./Router/routes");

const app = express()
connectDB()

app.use(express.json());
app.use("/", router);

app.get("/", (req, res) => {
  res.send("HELLO");
});

const port = process.env.PORT || 5000;
app.listen(port, console.log(`server is running on ${port}`));