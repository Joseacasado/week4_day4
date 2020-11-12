const express = require('express')
const router = express.Router()

// Endpoints

// Renderizar formulario
router.get('/login', (req, res) => res.render('private-zone/login-form'))

// Gestionar formulario
router.post('/login', (req, res) => res.render('private-zone/login-results', req.body))

module.exports = router