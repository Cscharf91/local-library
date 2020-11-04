'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.genre_list = genre_list;
exports.genre_detail = genre_detail;
exports.genre_create_get = genre_create_get;
exports.genre_create_post = genre_create_post;
exports.genre_delete_get = genre_delete_get;
exports.genre_delete_post = genre_delete_post;
exports.genre_update_get = genre_update_get;
exports.genre_update_post = genre_update_post;

var _genre = require('../models/genre');

var _genre2 = _interopRequireDefault(_genre);

var _book = require('../models/book');

var _book2 = _interopRequireDefault(_book);

var _async = require('async');

var _async2 = _interopRequireDefault(_async);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Display list of all Genre.
function genre_list(req, res) {
    _genre2.default.find().populate('genre').exec(function (err, list_genres) {
        if (err) next(err);
        res.render('genre_list', { title: 'Genre List', genre_list: list_genres });
    });
};

// Display detail page for a specific Genre.
function genre_detail(req, res, next) {
    _async2.default.parallel({
        genre: function genre(callback) {
            _genre2.default.findById(req.params.id).exec(callback);
        },
        genre_books: function genre_books(callback) {
            _book2.default.find({ 'genre': req.params.id }).exec(callback);
        }
    }, function (err, results) {
        if (err) next(err);
        if (results.genre == null) {
            var _err = new Error('Genre not found');
            _err.status = 404;
            return next(_err);
        }
        res.render('genre_detail', { title: 'Genre Detail', genre: results.genre, genre_books: results.genre_books });
    });
};

// Display Genre create form on GET.
function genre_create_get(req, res) {
    res.send('NOT IMPLEMENTED: Genre create GET');
}

// Handle Genre create on POST.
function genre_create_post(req, res) {
    res.send('NOT IMPLEMENTED: Genre create POST');
}

// Display Genre delete form on GET.
function genre_delete_get(req, res) {
    res.send('NOT IMPLEMENTED: Genre delete GET');
}

// Handle Genre delete on POST.
function genre_delete_post(req, res) {
    res.send('NOT IMPLEMENTED: Genre delete POST');
}

// Display Genre update form on GET.
function genre_update_get(req, res) {
    res.send('NOT IMPLEMENTED: Genre update GET');
}

// Handle Genre update on POST.
function genre_update_post(req, res) {
    res.send('NOT IMPLEMENTED: Genre update POST');
}