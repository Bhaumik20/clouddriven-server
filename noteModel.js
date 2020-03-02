var mongoose = require('mongoose');
// Setup schema
var noteSchema = mongoose.Schema({
    title: {
        type: String,
        required: false,
        default:'untitled'
    },
    text: {
        type: String,
        required: false
    },
    owner:{
        type:String,
        required:true
    }
    
});
// Export Contact model
var Note = module.exports = mongoose.model('note', noteSchema);
module.exports.get = function (callback, limit) {
    Note.find(callback).limit(limit);
}