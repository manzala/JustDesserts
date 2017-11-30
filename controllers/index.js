
const express = require('express');
//const fs = require('fs');
const path = require('path');

const router = express.Router();
//const basename = path.basename(module.filename);



//router.use('/alt', require('./alt'));
router.use('/api', require('./home'));
//router.use('/api/login', require('./login'))

module.exports = router;