const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const app = express();
//***********Middlewares********** */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(cookieParser());

//add a middleware to send cookie to the client.
//for see=browser>inspect>application>cookies>localhost:3000
app.use((req, res, next) => {
  res.cookie("username", "pradeep");
  next();
});
//*********Route**************** */

app.get("/", (req, res) => {
  // res.setHeader('Type','text/html')     ---->Not Require
  res.send("<h2>Welcome to Express world</h2>");
});
app.get("/about", (req, res) => {
  res.send("my name is querty");
});
// capture the form data from postman and  send entire form data through response in json format
app.post("/xyz", (req, res) => {
  res.json(req.body);
});

// capture JSON data from postman and send entire data in response in plain text format.
app.post("/pqr", (req, res) => {
  res.json(req.body);
});

// a router to capture params from the request on a route /users/:username using GET request.
// capture the username and respond with username in HTML response.
app.get("/users/:username", (req, res) => {
  var name = req.params.username;
  res.send(`<h2>${name}</h2>`);     // Browser>localhost:3000/users/pradeep
});
//************Error Handler Middlewares************* */
//a 404 handler for routes which are not handled
app.use((req, res, next) => {
  res.send("Page Not Found");
});
// custom middleware
app.use((err, req, res, next) => {
  res.send(err);
});
app.listen(3000, () => {
  console.log("server is running at port 3K");
});
