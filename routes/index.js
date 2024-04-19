const router = require("express").Router();

const chapterRoutes = require("./chapter.routes");

const { displayChapterList } = require("../controllers/chapter.controllers");

router.get("/", displayChapterList);

router.use("/chapter", chapterRoutes);

module.exports = router;
