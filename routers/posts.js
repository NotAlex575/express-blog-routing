const express = require("express");
const router = express.Router();

//index
router.get("/", (req, res) => {
    res.send("Elenco dei posts")
})

//show
router.get("/:id", (req, res) => {
    res.send(`Dettaglio del post con id ${req.params.id}`);
})

module.exports = router;