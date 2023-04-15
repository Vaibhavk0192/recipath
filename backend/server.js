require("dotenv").config({ path: __dirname + "/./../.env" });
const express = require("express");
const bodyParser = require("body-parser");
const md5 = require("md5");
const cors = require("cors");
const request = require("request");
const app = express();
const mongoose = require("mongoose");

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
      res.json({ email: newUser.email, password: newUser.password });
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

  User.findOne({ email: email })
    .then((foundUser) => {
      res.json({ email: foundUser.email, password: foundUser.password });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/api/subscribe", function (req, res) {
  const email = req.body.email;
  const mcData = {
    members: [
      {
        email_address: email,
        status: "pending",
      },
    ],
  };
  const postData = JSON.stringify(mcData);
  const options = {
    url:
      "https://us21.api.mailchimp.com/3.0/lists/" +
      process.env.MAILCHIMP_LIST_ID,
    method: "POST",
    headers: {
      Authorization: "auth " + process.env.MAILCHIMP_API_KEY,
    },
    body: postData,
  };
  request(options, (error, response, body) => {
    if (!error) res.sendStatus(200);
    else res.sendStatus(404);
  });
});

app.listen(5000, function (err) {
  if (err) console.log(err);
  else console.log("Server started on port 5000");
});
