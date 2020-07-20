const { Router } = require('express');
const router = Router();
const pool = require('../database');

router.get('/add', (req, res) => {
    res.render('links/add.hbs');
});

router.post('/add', (req, res) => {
    res.send('recibido');
});

module.exports = router;