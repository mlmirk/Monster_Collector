//import { Router } from "express";
const express = require("express");

const monsterRouter = express.Router();
//import * as monsterController from "../controllers/monsters.js";
const {
  index,
  create,
  deleteMonster,
  update,
  show,
  search,
} = require("../controllers/monsters.js");

// routers for CRUD operations

monsterRouter.get("/", index);
monsterRouter.get("/:id", show);
monsterRouter.get("/search/:search", search);
monsterRouter.post("/", create);
monsterRouter.post("/:id", update); // to be changed to a put route
monsterRouter.delete("/:id", deleteMonster);

module.exports = { monsterRouter };
