const express = require('express');
const {cambioAceite, insertcambioAceite} = require('../controllers/aceite.controller');
const router = express.Router();

router.get('/', cambioAceite);
router.post('/', insertcambioAceite);

module.exports = router;