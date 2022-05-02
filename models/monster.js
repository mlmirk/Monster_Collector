import mongoose from "mongoose";

const Schema = mongoose.Schema;

const monsterSchema = new Schema({
  name: String,
  imageURL: String,
  isScary: Boolean,
  owner: { type: Schema.Types.ObjectId, ref: "Profile" },
});

const Monster = mongoose.model("Monster", monsterSchema);

export { Monster };
