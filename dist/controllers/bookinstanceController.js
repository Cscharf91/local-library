'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bookinstance_list = bookinstance_list;
exports.bookinstance_detail = bookinstance_detail;
exports.bookinstance_create_get = bookinstance_create_get;
exports.bookinstance_create_post = bookinstance_create_post;
exports.bookinstance_delete_get = bookinstance_delete_get;
exports.bookinstance_delete_post = bookinstance_delete_post;
exports.bookinstance_update_get = bookinstance_update_get;
exports.bookinstance_update_post = bookinstance_update_post;

var _async = require('async');

var BookInstance = require('../models/bookinstance');

// Display list of all BookInstances.
function bookinstance_list(req, res) {
    BookInstance.find().populate('book').exec(function (err, list_bookinstances) {
        if (err) {
            return next(err);
        }
        res.render('bookinstance_list', { title: 'Book Instance List', bookinstance_list: list_bookinstances });
    });
};

// Display detail page for a specific BookInstance.
function bookinstance_detail(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance detail: ' + req.params.id);
}

// Display BookInstance create form on GET.
function bookinstance_create_get(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance create GET');
}

// Handle BookInstance create on POST.
function bookinstance_create_post(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance create POST');
}

// Display BookInstance delete form on GET.
function bookinstance_delete_get(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance delete GET');
}

// Handle BookInstance delete on POST.
function bookinstance_delete_post(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance delete POST');
}

// Display BookInstance update form on GET.
function bookinstance_update_get(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance update GET');
}

// Handle bookinstance update on POST.
function bookinstance_update_post(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance update POST');
}