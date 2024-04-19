const { getAllChapters } = require("../database/queries/chapter.queries");

exports.displayChapterList = async (req, res, next) => {
  try {
    const chapters = await getAllChapters();
    res.render("home", { chapters });
  } catch (error) {
    next(error);
  }
};

exports.createForm = (req, res, next) => {};

exports.createChapter = (req, res, next) => {};

exports.deleteChapter = (req, res, next) => {};

exports.getOneChapter = (req, res, next) => {};
