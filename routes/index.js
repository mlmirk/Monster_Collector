//import { Router } from "express";
const express = require("express");

const indexRouter = express.Router();

indexRouter.get("/", function (req, res) {
  res.send("Secured Resource");
});

module.exports = { indexRouter };
