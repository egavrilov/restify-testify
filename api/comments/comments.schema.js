const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const CommentSchema = new Schema({
    text: String,
    article: {
        type: String,
        ref: 'Article'
    },
    author: {
        type: String,
        ref: 'User'
    }
});
mongoose.model('Comment', CommentSchema);
