const express = require("express");
const {
  createForm,
  createChapter,
  deleteChapter,
  getOneChapter,
} = require("../controllers/chapter.controllers");

const router = express.Router();

router.get("/create-form", createForm);
router.post("/create", createChapter);
router.delete("/delete/:chapterId", deleteChapter);
router.get("/:chapterId", getOneChapter);

module.exports = router;
