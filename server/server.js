const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");

app.use(cors("*"));
app.get("/", function (req, res) {
  async function fetchData() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      res.json(response.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      res.status(500).send("Internal Server Error");
    }
  }
  fetchData();
});
app.get("/userdata", function (req, res) {
  async function fetchData() {
    try {
      const respons = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      res.json(respons.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      res.status(500).send("Internal Server Error");
    }
  }
  fetchData();
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
