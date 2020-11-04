'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.author_list = author_list;
exports.author_detail = author_detail;
exports.author_create_get = author_create_get;
exports.author_create_post = author_create_post;
exports.author_delete_get = author_delete_get;
exports.author_delete_post = author_delete_post;
exports.author_update_get = author_update_get;
exports.author_update_post = author_update_post;

var _author = require('../models/author');

var _author2 = _interopRequireDefault(_author);

var _book = require('../models/book');

var _book2 = _interopRequireDefault(_book);

var _async = require('async');

var _async2 = _interopRequireDefault(_async);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Display list of all Authors.
function author_list(req, res, next) {
    _author2.default.find().sort([['family_name', 'ascending']]).exec(function (err, list_authors) {
        if (err) next(err);
        res.render('author_list', { title: 'Author List', author_list: list_authors });
    });
};

// Display detail page for a specific Author.
function author_detail(req, res, next) {
    _async2.default.parallel({
        author: function author(callback) {
            _author2.default.findById(req.params.id).exec(callback);
        },
        author_books: function author_books(callback) {
            _book2.default.find({ 'author': req.params.id }, 'title summary').exec(callback);
        }
    }, function (err, results) {
        if (err) next(err);
        if (results.author == null) {
            var _err = new Error('Author not found');
            _err.status = 404;
            return next(_err);
        }
        res.render('author_detail', { title: 'Author Detail', author: results.author, author_books: results.author_books });
    });
};

// Display Author create form on GET.
function author_create_get(req, res) {
    res.send('NOT IMPLEMENTED: Author create GET');
}

// Handle Author create on POST.
function author_create_post(req, res) {
    res.send('NOT IMPLEMENTED: Author create POST');
}

// Display Author delete form on GET.
function author_delete_get(req, res) {
    res.send('NOT IMPLEMENTED: Author delete GET');
}

// Handle Author delete on POST.
function author_delete_post(req, res) {
    res.send('NOT IMPLEMENTED: Author delete POST');
}

// Display Author update form on GET.
function author_update_get(req, res) {
    res.send('NOT IMPLEMENTED: Author update GET');
}

// Handle Author update on POST.
function author_update_post(req, res) {
    res.send('NOT IMPLEMENTED: Author update POST');
}