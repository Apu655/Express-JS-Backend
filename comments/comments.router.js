const { createComments, getComments } = require("./comments.controller");
const router = require("express").Router();
router.post("/post", createComments);
router.get("/get", getComments);

module.exports = router;
