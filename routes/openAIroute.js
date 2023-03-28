const express = require("express");
const {
  summaryController,
  paragraphController,
  chatbotController,
  codehelperController,
  imagegenController,
} = require("../controllers/openAiController");

const router = express.Router();

router.post("/summary", summaryController);
router.post("/paragraph", paragraphController);
router.post("/chatbot", chatbotController);
router.post("/codehelper", codehelperController);
router.post("/imagegen", imagegenController);
module.exports = router;
