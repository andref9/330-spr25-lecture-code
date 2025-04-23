const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send([{email: 'andref9@uw.edu'}]);
});

module.exports = router;