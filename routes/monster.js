import { Router } from "express";
const router = Router();
import * as monsterController from "../controllers/monsters.js";
import { isLoggedIn } from "../middleware/middleware.js";

router.get("/:id", monsterController.index);
router.post("/:id", monsterController.create);
router.put("/", monsterController.update);
router.delete("/:id", monsterController.deleteMonster);
export { router };
