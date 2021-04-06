const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

router.get("/", mainController.index);
router.get("/about", mainController.about);
router.get("/faq", mainController.faq);
router.get("/contact", mainController.contact);
router.post("/contact", mainController.newMessage);
router.get("/messageOk", mainController.messageOk);

module.exports = router;
