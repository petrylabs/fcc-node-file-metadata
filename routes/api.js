const express = require('express');
const router = express.Router();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

router.post("/fileanalyse", upload.single('upfile'), function (req, res) {
    res.json(req.file);
});

module.exports = router;