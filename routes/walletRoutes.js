const express = require('express');
const { topup, deduct, getBalance } = require('../controllers/walletController');

const router = express.Router();

router.post('/topup', topup);
router.post('/deduct', deduct);
router.get('/balance', getBalance);

module.exports = router;
