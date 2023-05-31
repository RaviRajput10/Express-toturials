const express = require("express");
const bodyParser = require("body-parser");
const bookRouter = require("./book-router.js");
const app = express();
// app.use(bodyParser.json());

app.get("/abc?", function (req, res) {
  res.send("Hello World");
});

// regex based route
app.get("/abc+/", function (req, res) {
  res.send("Regex based route response");
});

// handling alll route
app.all("/user", function (req, res) {
  console.log("USER API CALLED");
  res.send(req.method);
});

// dynamic routing
app.get("/user/:userId/:name", function (req, res) {
  console.log(req.params);
  res.send(req.params);
});

// shorthand properties
app
  .route("/")
  .get(function (req, res) {
    res.send("GET");
  })
  .post(function (req, res) {
    res.send("Posted");
  })
  .delete(function (req, res) {
    res.send("Will delete a resource");
  });

app.post("/", function (req, res) {
  res.send("Posted");
});
app.delete("/", function (req, res) {
  res.send("Will delete a resource");
});

// modularized routes
app.use("/books", bookRouter);

// app.use('/books',bookRouter);
// using query string
// app.get('/input', function(res, req) {
//     req.send(req.query);
// })


// user input
// app.get("/input", function(req, res) {
//     res.send({
//         query: req.query,
//         appName: req.get("app-name")
//     })
// })

app.post("/input1", function (req, res) {
  res.send(req.body);
});

const port = process.env.PORT || 8000;
app.listen(port, function () {
  console.log(`Server started at ${port}`);
});
