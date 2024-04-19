const Chapter = require("../models/chapter.model");

exports.getAllChapters = () => {
  return Chapter.find({}).exec();
};

exports.createNewChapter = async (request) => {
  const { title, nbLessons, active } = request;
  const newChapter = new Chapter({
    title,
    nbLessons,
    active: active === "on" ? true : false,
  });
  return newChapter.save();
};
