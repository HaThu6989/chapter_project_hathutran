const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const chapterSchema = Schema(
  {
    title: { type: String },
    nbLessons: { type: Number, default: 0 },
    active: Boolean,
  },
  { timestamps: true }
);

const Chapter = model("chapter", chapterSchema);

module.exports = Chapter;
