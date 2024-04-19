const Chapter = require("../models/chapter.model");

exports.getAllChapters = () => {
  return Chapter.find({}).exec();
};
