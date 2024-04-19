const express = require("express");
const {
  createForm,
  createChapter,
  deleteChapter,
  getOneChapter,
} = require("../controllers/chapter.controllers");

const router = express.Router();

router.get("/new", createForm);
router.post("/new", createChapter);
router.delete("/delete/:chapterId", deleteChapter);
router.get("/:chapterId", getOneChapter);

module.exports = router;
