import mongoose from "mongoose";
// Define a Schema
const Schema = mongoose.Schema;
// create Monster Schema with Schema types
const monsterSchema = new Schema({
  name: String,
  imageURL: String,
  isScary: Boolean,
  codeType: String,
  description: String,

  owner: { type: Schema.Types.ObjectId, ref: "Profile" },
});
// create a Monster model
const Monster = mongoose.model("Monster", monsterSchema);

module.exports = { Monster };
