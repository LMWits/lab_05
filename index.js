const express = require('express');
const application = express();

application.use(express.json());

let books = [{id:1, title: 'Americanah'}];
appliocation.listen(3000);

application.get('/whoami', (req, res)=> {
    res.send({studentnumber : 2330429});
});

application.get('/books', (req, res)=>{

    res.send(books);
});

application.get('/books/:id', (req, res) => {

    const book = books.find(c => c.id === parseInt(req.params.id));

    if(!book) {
        return res.status(404).send('404 Not Found');
    }

    res.send(book);
});

application.post('/books', (req, res) => {
    
    const book = {
        id:books.length+1,
        title: req.body.title,
        details: [{
            id:books.length + 1,
            author: req.body.author,
            genre: req.body.genre,
            publicationYear: req.body.publlicationYear
        }]
    }

    if ((!id) || (!title) || (!details)) {
        res.status(400).send('400 Bad Request');
    }
    else {
        books.push(book);
    }
});

application.put('/books/:id', (req, res) => {

    const book = books.find(c => c.id == parseInt(req.params.id));

    book.title = title;
    book.author = author;
    book.details = details;

    res.json(book);
});

application.delete('/books/:id/details', (req, res) => {

    const book = books.find(c => c.id == parseInt(req.params.id));

    const author = req.body;
    const genre = req.body;
    const publicationYear = req.body;

    const det ={
        id:String(book.details.length+1),
        author,
        genre,
        publicationYear
    };
});

application.delete('/books/;id/datils/:detailId',(req, res) => {

    const det = books.findIndex(detail => detail.id == parseInt(req.params.detailId));

    books.details.splice(det, 1);
});