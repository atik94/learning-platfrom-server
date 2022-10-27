const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = process.env.PORT || 5000;
const courses = require("./data/courses.json");

app.get("/", (req, res) => {
  res.send("Course api running");
});
app.get("/courses", (req, res) => {
  res.send(courses);
});
app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const getSinglecourse = courses?.find((courseId) => courseId.id == id);
  res.send(getSinglecourse);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
