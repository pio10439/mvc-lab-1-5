exports.getAuthors = (req, res) => {
    const authors = []; 
    if (authors.length === 0) {
        res.render('authors', { authors, message: 'No authors have been found' });
    } else {
        res.render('authors', { authors });
    }
};