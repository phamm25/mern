const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const { use } = require("../routes/places-routes");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true }, // unique: true => create index for email => speed up
  password: { type: String, required: true, minlength: 6 },
  image: { type: String, required: true }, // URL
  places: [{ type: mongoose.Types.ObjectId, required: true, ref: "Place" }],
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
