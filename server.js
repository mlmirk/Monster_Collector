import "dotenv/config.js";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import createError from "http-errors";
import logger from "morgan";
import methodOverride from "method-override";
import { expressjwt } from "express-jwt";
import { JwksClient } from "jwks-rsa";
import cors from "cors";
import { auth } from "express-oauth2-jwt-bearer";

// connect to MongoDB with mongoose
import("./config/database.js");
var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://dev-3splgcvt.us.auth0.com/.well-known/jwks.json",
  }),
  audience: "https://monster-collector.herokuapp.com/",
  issuer: "https://dev-3splgcvt.us.auth0.com/",
  algorithms: ["RS256"],
});

const checkJwt = auth({
  audience: "https://monster-collector.herokuapp.com/",
  issuerBaseURL: `https://mosserryan.github.io/JMRmonS_FrontEnd/`,
});
//auth0

// require routes
import { router as indexRouter } from "./routes/index.js";
import { router as monsterRouter } from "./routes/monster.js";
import { passUserToView } from "./middleware/middleware.js";

// create the express app
const app = express();
app.use(cors());
app.use(jwtCheck);

// view engine setup

// middleware

app.use(methodOverride("_method"));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  express.static(
    path.join(path.dirname(fileURLToPath(import.meta.url)), "public")
  )
);
//auth0 router intiialization

// session middleware

app.use(passUserToView);

//custom middleware

// router middleware
app.use("/", indexRouter);
app.use("/monster", checkJwt, monsterRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error", {
    title: `🎊 ${err.status || 500} Error`,
  });
});

export { app };
