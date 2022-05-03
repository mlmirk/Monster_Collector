import { Monster } from "../models/monster.js";

function index(req, res) {
  Monster.find({})
    .then((monster) => {
      res.status(200).json(monster);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}
function update(res, req) {
  Monster.findbyIdAndUpdate(req.parameters.id, req.body, { new: true })
    .then((monster) => res.status(200).json(monster))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}
function delete(req, res) {
  Monsters.findbyIdAnd
}
// .then((monsters) => {
//   res.render("monsters/index", {
//     monsters,
//     title: "Monsters",
//   });
// })
// .catch((err) => {
//   console.log(err);
//   res.redirect("/monster");
// });

function create(req, res) {
  Monster.create(req.body)
    .then((monster) => res.status(201).json(monster))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}

export { index, create };
