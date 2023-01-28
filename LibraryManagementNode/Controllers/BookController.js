const express = require('express');
var router = express.Router();

var { Books } = require("../Models/Books");

router.get(`/`, async (req, res) => {
    const books = await Books.find();

    if (!books) {
        res.status(500).json({ success: false })
    }
    res.status(200).send(books);
})

router.get('/:id', async (req, res) => {
    const books = await Books.findById(req.params.id);

    if (!books) {
        res.status(500).json({ message: 'The Client with the given ID was not found.' })
    }
    res.status(200).send(books);
})

router.post('/', async (req, res) => {
    let books = new Books({
        description: req.body.description,
        price: req.body.price,
        title: req.body.title,
        author: req.body.author,
        image: req.body.image,
    })
    books = await books.save();

    if (!books)
        return res.status(400).send('the Admin cannot be created!')

    res.send(books);
})

//localhost:3000/books

module.exports = router;

