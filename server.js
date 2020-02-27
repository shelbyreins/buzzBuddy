var express = require("express");
const routes = require("./routes");

var app = express();

var PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
//   }

// var htmlRoutes = require("./app/routes/html-routes");
// app.use(htmlRoutes);


app.use(routes);


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
