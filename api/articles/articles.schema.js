const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const ArticleSchema = new Schema({
    title: String,
    slug: String,
    content: String,
    author: {
        type: String,
        ref: "User"
    }
});

mongoose.model('Article', ArticleSchema);
