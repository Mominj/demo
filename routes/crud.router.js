const router = require("express").Router();
const { create, read } = require("../controller/crud.controller");

router.post("/create", create);
router.get("/read", read);

module.exports = router;
