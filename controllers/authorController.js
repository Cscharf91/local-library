import Author from '../models/author';
import Book from '../models/book';
import async from 'async';

// Display list of all Authors.
export function author_list(req, res, next) {
    Author.find()
      .sort([['family_name', 'ascending']])
      .exec(function (err, list_authors) {
          if (err) next(err);
          res.render('author_list', { title: 'Author List', author_list: list_authors });
      })
};

// Display detail page for a specific Author.
export function author_detail(req, res, next) {
    async.parallel({
        author: (callback) => {
            Author.findById(req.params.id)
              .exec(callback)
        },
        author_books: (callback) => {
            Book.find({ 'author': req.params.id }, 'title summary')
              .exec(callback)
        },
    }, (err, results) => {
        if (err) next(err)
        if (results.author == null) {
            const err = new Error('Author not found');
            err.status = 404;
            return next(err);
        }
        res.render('author_detail', { title: 'Author Detail', author: results.author, author_books: results.author_books });
    });
};

// Display Author create form on GET.
export function author_create_get(req, res) {
    res.send('NOT IMPLEMENTED: Author create GET');
}

// Handle Author create on POST.
export function author_create_post(req, res) {
    res.send('NOT IMPLEMENTED: Author create POST');
}

// Display Author delete form on GET.
export function author_delete_get(req, res) {
    res.send('NOT IMPLEMENTED: Author delete GET');
}

// Handle Author delete on POST.
export function author_delete_post(req, res) {
    res.send('NOT IMPLEMENTED: Author delete POST');
}

// Display Author update form on GET.
export function author_update_get(req, res) {
    res.send('NOT IMPLEMENTED: Author update GET');
}

// Handle Author update on POST.
export function author_update_post(req, res) {
    res.send('NOT IMPLEMENTED: Author update POST');
}