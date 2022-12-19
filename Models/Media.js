const mongoose = require("mongoose");

const MediaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    files: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

module.exports = Media = mongoose.model("Media", MediaSchema);
