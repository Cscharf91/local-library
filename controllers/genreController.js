import Genre from '../models/genre';
import Book from '../models/book';
import async from 'async';

// Display list of all Genre.
export function genre_list(req, res) {
    Genre.find()
      .populate('genre')
      .exec((err, list_genres) => {
          if (err) next(err);
          res.render('genre_list', { title: 'Genre List', genre_list: list_genres });
      })
};

// Display detail page for a specific Genre.
export function genre_detail(req, res, next) {
    async.parallel({
        genre: function(callback) {
            Genre.findById(req.params.id)
              .exec(callback);
        },
        genre_books: function(callback) {
            Book.find({ 'genre': req.params.id })
              .exec(callback);
        },
    }, function(err, results) {
        if (err) next(err);
        if (results.genre == null) {
            const err = new Error('Genre not found');
            err.status = 404;
            return next(err);
        }
        res.render('genre_detail', { title: 'Genre Detail', genre: results.genre, genre_books: results.genre_books });
    });
};

// Display Genre create form on GET.
export function genre_create_get(req, res) {
    res.send('NOT IMPLEMENTED: Genre create GET');
}

// Handle Genre create on POST.
export function genre_create_post(req, res) {
    res.send('NOT IMPLEMENTED: Genre create POST');
}

// Display Genre delete form on GET.
export function genre_delete_get(req, res) {
    res.send('NOT IMPLEMENTED: Genre delete GET');
}

// Handle Genre delete on POST.
export function genre_delete_post(req, res) {
    res.send('NOT IMPLEMENTED: Genre delete POST');
}

// Display Genre update form on GET.
export function genre_update_get(req, res) {
    res.send('NOT IMPLEMENTED: Genre update GET');
}

// Handle Genre update on POST.
export function genre_update_post(req, res) {
    res.send('NOT IMPLEMENTED: Genre update POST');
}