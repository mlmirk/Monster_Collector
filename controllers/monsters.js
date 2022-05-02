import { Monster } from "../models/monster.js";

function index(req, res) {
  Monster.find({})
    .then((monsters) => {
      res.render("monsters/index", {
        monsters,
        title: "Monsters",
      });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/monster");
    });
}

function create(req, res) {
  req.body.owner = req.user.profile._id;
  req.body.isScary = !!req.body.isScary;
  Monster.create(req.body)
    .then((monster) => {
      res.redirect("/monster");
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/monster");
    });
}

export { index, create };
