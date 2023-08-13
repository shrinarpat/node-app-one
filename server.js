const express = require("express");
const path = require("path");

const app = express();

const staticFilesPath = path.join(__dirname, "public");

// app.use(express.static(staticFilesPath));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(staticFilesPath, "index.html"));
});

app.get("/about", (req, res) => {
  res.status(200).sendFile(path.join(staticFilesPath, "about.html"));
});

app.get("*", (req, res) => {
  res.status(404).sendFile(path.join(staticFilesPath, "pageNotFound.html"));
});

app.listen(3500);
