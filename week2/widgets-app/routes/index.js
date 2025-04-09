const { Router } = require("express");
const router = Router();

router.get('/', (req, res) => res.send('Hello world'));

router.use("/widgets", require('./widgets'));

module.exports = router;
