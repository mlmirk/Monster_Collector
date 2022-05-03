import { Monster } from "../models/monster.js";

function index(req, res) {
  Monster.find({})
    .then((puppies) => {
      res.status(200).json(puppies);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
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
