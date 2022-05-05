require("dotenv").config();
const express = require("express");
const createError = require("http-errors");
const logger = require("morgan");
const methodOverride = require("method-override");
const cors = require("cors");

// connect to MongoDB with mongoose
require("./config/database.js");

// require routes

var { indexRouter } = require("./routes/index.js");
var { monsterRouter } = require("./routes/monster.js");

// create the express app
const app = express();
app.use(cors());
const { auth } = require("express-openid-connect");

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: "a long, randomly-generated string stored in env",
  baseURL: "https://mosserryan.github.io/JMRmonS_FrontEnd/",
  clientID: "DBcOEkKUWGQVaktG4XuSdMRsRLRIbXxo",
  issuerBaseURL: "https://dev-3splgcvt.us.auth0.com",
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

// var { expressjwt: jwt } = require("express-jwt");
// var jwks = require("jwks-rsa");

// const { auth } = require("express-oauth2-jwt-bearer");

// const checkJwt = auth({
//   audience: "https://monster-collector.herokuapp.com/",
//   issuerBaseURL: `https://mosserryan.github.io/JMRmonS_FrontEnd/`,
// });
// var jwtCheck = jwt({
//   secret: jwks.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: "https://dev-3splgcvt.us.auth0.com/.well-known/jwks.json",
//   }),
//   audience: "https://monster-collector.herokuapp.com/",
//   issuer: "https://dev-3splgcvt.us.auth0.com/",
//   algorithms: ["RS256"],
// });

//app.use(jwtCheck);
//app.set("view engine", "ejs");

// middleware

app.use(methodOverride("_method"));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router middleware
app.use("/", indexRouter);
app.use("/monster", monsterRouter);

module.exports = { app, express };
