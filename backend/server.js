require("dotenv").config({ path: __dirname + "/./../.env" });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const md5 = require("md5");
const cors = require("cors");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

mongoose.set("strictQuery", true);
mongoose.connect(process.env.DATABASE_CONNECTION_URL);

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = new mongoose.model("User", userSchema);

app.post("/api/signup", function (req, res) {
  const userdata = req.body;
  const newUser = new User({
    name: userdata.name,
    email: userdata.email,
    password: md5(userdata.password),
  });
  newUser
    .save()
    .then((newUser) => {
      console.log(newUser.name);
      res.status(200);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/api/login", function (req, res) {
  const userdata = req.body;
  const email = userdata.email;
  const password = md5(userdata.password);

  User.findOne({ email: email }, function (err, foundUser) {
    if (err) console.log(err);
    else {
      if (foundUser) {
        if (md5(foundUser.password) === md5(password)) console.log("Found");
      }
    }
  });
});

app.listen(5000, function (err) {
  if (err) console.log(err);
  else console.log("Server started on port 5000");
});
