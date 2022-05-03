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

function show(req, res) {
  Monster.findById(req.params.id)
    .then((monster) => res.status(200).json(monster))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}

function update(res, req) {
  Monster.findbyIdAndUpdate(req.params.id, req.body, { new: true })
    .then((monster) => res.status(200).json(monster))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}
function deleteMonster(req, res) {
  Monster.findByIdAndDelete(req.params.id)
    .then((monster) => res.status(204).end())
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}

function create(req, res) {
  Monster.create(req.body)
    .then((monster) => res.status(201).json(monster))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}

export { index, create, deleteMonster, update, show };
