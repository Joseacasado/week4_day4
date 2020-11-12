const express = require('express')
const router = express.Router()

// Endpoints

// Renderizar formulario
router.get('/buscar', (req, res) => res.render('shop/search-form'))


// Gestiona resultados formulario
router.get('/resultados-busqueda', (req, res) => res.render('shop/search-results', req.query))


// Ejemplos raw
router.get('/temporada/:season/prenda/:clothe', (req, res) => {

    console.log('---------------------')
    console.log('Los route params son estos:', req.params)
    console.log('La consulta a la BBDD sería para la temporada', req.params.season, 'y', req.params.clothe)
    console.log('Los query strings son estos:', req.query)
    console.log('La consulta del filtro a la BBDD sería para talla', req.query.size, 'y color', req.query.color)
    console.log('---------------------')

    res.render('shop/shop-index')
})


module.exports = router