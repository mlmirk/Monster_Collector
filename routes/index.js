import { Router } from "express";

const indexRouter = Router();

router.get("/", function (req, res) {
  res.send("Secured Resource");
});

export { indexRouter };
