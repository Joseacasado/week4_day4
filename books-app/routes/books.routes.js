const express = require('express')
const router = express.Router()

const Book = require('./../models/book.model')

// Endpoints


// Listado de libros
router.get('/', (req, res) => {

    Book
        .find()
        .then(allBooks => res.render('books/books-list', { allBooks }))     // es lo mismo que  { allBooks: allBooks }
        .catch(err => console.log(err))
})




// Detalle de libro
router.get('/detalle/:book_id', (req, res) => {

    const bookId = req.params.book_id

    Book
        .findById(bookId)
        .then(theBook => res.render('books/details', theBook))
        .catch(err => console.log(err))
})


module.exports = router
