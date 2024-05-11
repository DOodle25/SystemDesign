const express = require("express");

const app = express();
const port = 9000;

// call back function
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// get method
app.get("/", (req, res) => {
  res.send("Hello World");
  console.log(`respont send`);
});

app.get("/about", (req, res) => {
  res.send("Hello World about");
  console.log(`respont send`);
});
