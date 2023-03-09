let express = require("express");

let app = express();
app.use("/admin", (req, res, next) => {
  next("Unauthorized User");
});
app.get("/", (req, res) => {
  res.send("Welcome");
});
app.get("/about", (req, res) => {
  res.send("pradeep Kumar Singh");
});

// ******404 Middleware*************
app.use((req, res, next) => {
  res.send("Page Not Found");
});
// **********custom Middleware***********
app.use((error, req, res, next) => {
  res.send(error);
});

app.listen(3000, () => {
  console.log("server is running on port 3K");
});
