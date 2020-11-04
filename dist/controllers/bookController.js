'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.index = index;
exports.book_list = book_list;
exports.book_create_get = book_create_get;
exports.book_create_post = book_create_post;
exports.book_delete_get = book_delete_get;
exports.book_delete_post = book_delete_post;
exports.book_update_get = book_update_get;
exports.book_update_post = book_update_post;
var Book = require('../models/book');
var Author = require('../models/author');
var Genre = require('../models/genre');
var BookInstance = require('../models/bookinstance');

var async = require('async');

function index(req, res) {
    async.parallel({
        book_count: function book_count(callback) {
            Book.countDocuments({}, callback);
        },
        book_instance_count: function book_instance_count(callback) {
            BookInstance.countDocuments({}, callback);
        },
        book_instance_available_count: function book_instance_available_count(callback) {
            BookInstance.countDocuments({ status: 'Available' }, callback);
        },
        author_count: function author_count(callback) {
            Author.countDocuments({}, callback);
        },
        genre_count: function genre_count(callback) {
            Genre.countDocuments({}, callback);
        }
    }, function (err, results) {
        res.render('index', {
            title: 'Local Library Home',
            error: err,
            data: results
        });
    });
}

// Display list of all books.
function book_list(req, res) {
    Book.find({}, 'title author').populate('author').exec(function (err, list_books) {
        if (err) {
            return next(err);
        }
        res.render('book_list', { title: 'Book List', book_list: list_books });
    });
}

// Display detail page for a specific book.
exports.book_detail = function (req, res, next) {

    async.parallel({
        book: function book(callback) {

            Book.findById(req.params.id).populate('author').populate('genre').exec(callback);
        },
        book_instance: function book_instance(callback) {

            BookInstance.find({ 'book': req.params.id }).exec(callback);
        }
    }, function (err, results) {
        if (err) {
            return next(err);
        }
        if (results.book == null) {
            // No results.
            var err = new Error('Book not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render.
        res.render('book_detail', { title: results.book.title, book: results.book, book_instances: results.book_instance });
    });
};

// Display book create form on GET.
function book_create_get(req, res) {
    res.send('NOT IMPLEMENTED: Book create GET');
}

// Handle book create on POST.
function book_create_post(req, res) {
    res.send('NOT IMPLEMENTED: Book create POST');
}

// Display book delete form on GET.
function book_delete_get(req, res) {
    res.send('NOT IMPLEMENTED: Book delete GET');
}

// Handle book delete on POST.
function book_delete_post(req, res) {
    res.send('NOT IMPLEMENTED: Book delete POST');
}

// Display book update form on GET.
function book_update_get(req, res) {
    res.send('NOT IMPLEMENTED: Book update GET');
}

// Handle book update on POST.
function book_update_post(req, res) {
    res.send('NOT IMPLEMENTED: Book update POST');
}