'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var AuthorSchema = new Schema({
    first_name: { type: String, required: true, maxlength: 100 },
    family_name: { type: String, required: true, maxlength: 100 },
    date_of_birth: { type: Date },
    date_of_death: { type: Date }
});

AuthorSchema.virtual('name').get(function () {
    return this.family_name + ', ' + this.first_name;
});

AuthorSchema.virtual('lifespan').get(function () {
    return (this.date_of_death.getYear() - this.date_of_birth.getYear()).toString();
});

AuthorSchema.virtual('url').get(function () {
    return '/catalog/author/' + this._id;
});

module.exports = _mongoose2.default.model('Author', AuthorSchema);