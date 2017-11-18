
const express = require('express');
//const fs = require('fs');
const path = require('path');

const router = express.Router();
//const basename = path.basename(module.filename);



//router.use('/alt', require('./alt'));
router.use('/api', require('./home'));
//router.use('/api', require('./sign-up'))

module.exports = router;