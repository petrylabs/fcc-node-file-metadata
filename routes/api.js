const express = require('express');
const router = express.Router();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

router.post("/fileanalyse", upload.single('upfile'), function (req, res) {
    const resObj = {
        name: req.file.originalname,
        type: req.file.mimetype,
        size: req.file.size
    }
    res.json(resObj);
});

module.exports = router;