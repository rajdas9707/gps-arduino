// server.js
const express = require("express");
var cors = require('cors')



const app = express();
const PORT = 1234;


app.use(cors())
// Middleware to parse JSON body
app.use(express.json());

// GET request example
app.get("/", (req, res) => {
  console.log('get request');
  
  res.send("Hello! This is a GET request.");
});

// POST request example
app.post("/data", (req, res) => {
  const receivedData = req.body;
  res.json({
    message: "POST request received!",
    yourData: receivedData,
  });
  console.log("req.body",req.body)
});

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});