import { Router } from "express";
const router = Router();
import * as monsterController from "../controllers/monsters.js";
import { isLoggedIn } from "../middleware/middleware.js";

router.get("/", monsterController.index);
router.post("/", monsterController.create);

export { router };
