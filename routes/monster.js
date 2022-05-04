import { Router } from "express";
const router = Router();
import * as monsterController from "../controllers/monsters.js";
import { isLoggedIn } from "../middleware/middleware.js";


// routers for CRUD operations

router.get("/", monsterController.index);
router.get("/:id", monsterController.show);
router.get("/search/:search", monsterController.search);
router.post("/", monsterController.create);
router.put("/:id", monsterController.update);
router.delete("/:id", monsterController.deleteMonster);

export { router };
