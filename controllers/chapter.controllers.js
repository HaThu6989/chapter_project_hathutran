const Chapter = require("../database/models/chapter.model");
const {
  getAllChapters,
  createNewChapter,
} = require("../database/queries/chapter.queries");

exports.displayChapterList = async (req, res, next) => {
  try {
    const chapters = await getAllChapters();
    res.render("home", { chapters });
  } catch (error) {
    next(error);
  }
};

exports.createForm = async (req, res, next) => {
  res.render("chapters/chapter-form");
};

exports.createChapter = async (req, res, next) => {
  try {
    const chapter = await createNewChapter(req.body);
    res.render("chapters/chapter", { chapter });
  } catch (error) {
    console.log("Error creating new chapter", error);
    next(error);
  }
};

exports.deleteChapter = (req, res, next) => {};

exports.getOneChapter = async (req, res, next) => {
  try {
    const { chapterId } = req.params;
    const chapter = await Chapter.findById(chapterId);
    console.log("chapter", chapter.active);
    res.render("chapters/chapter-page", { chapter });
  } catch (error) {}
};
