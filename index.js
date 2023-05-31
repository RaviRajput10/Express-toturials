const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const app = express();
app.use(bodyParser.json());
const bookRouter = require("./book-router.js");

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

// using query string
app.get('/input', function(req, res) {
    res.send(req.query);
})

// user input using Headers
app.get("/input", function(req, res) {
    res.send({
        query: req.query,
        appName: req.get("app-name")
    })
});

app.post("/input1", function (req, res) {
  // res.send(req.body);
  const { name } = req.body;
  res.send(`Hello, ${name}`);
});


app.get("/close-conn", function (req, res){
  res.write("Connection Closed")
  res.end();
})

app.get("/close-conn-json", function (req, res){
 res.json({name: "Connection Closed"})
})

app.get("/header", function (req, res){
  res.set('X-CUSTOM-HEADER', 'ravi'); // space is not allowed
 res.json({name: "Connection Closed"})
})

app.get("/status", function (req, res){
  res.status(404).end();
})

app.get("/login", function (req, res){
  res.redirect("/close-conn-json"); // 302 status code 
})

app.get("/send-file", function(req, res){
  res.sendFile(path.resolve("./index.html"))
})

app.get("/send-attachment", function(req, res){
  res.attachment(path.resolve("./index.html"))
  res.end();
})

// res.cookies is not a function showing error
app.get("/set-cookie", function (res, req){
  res.cookies('demo', 'demo-cookie');
  res.end(); 
})

app.get("/clear-cookie", function (res, req){
  res.clearCookie('demo', 'demo-cookie');
  res.end(); 
})

const port = process.env.PORT || 8000;
app.listen(port, function () {
  console.log(`Server started at ${port}`);
});
