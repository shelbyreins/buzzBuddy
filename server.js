var express = require("express");
var cors = require('cors')
var bodyParser = require('body-parser')
const mongoose = require('mongoose')

const routes = require("./routes");

var app = express();

var PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)


// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
//   }
const mongoURI = 'mongodb://localhost:27017/mernloginreg'

mongoose
  .connect(
    mongoURI,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

app.use(routes);


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
