const express = require('express');
const { getData, createData, updateData, deleteData } = require('./controllers');
const { login } = require('./authController');
const verifyToken = require('./authMiddleware');
const router = express.Router();

router.post('/login', login);
router.get('/data', getData);
router.post('/data', createData);
router.put('/data/:id', updateData);
router.delete('/data/:id', verifyToken, deleteData);

module.exports = router;