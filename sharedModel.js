var mongoose = require('mongoose');
// Setup schema
var sharedSchema = mongoose.Schema({
    folder: {
        type: Object,
        required: true
    },
    users: {
        type: Array,
        required: false
    }
    
});
// Export Contact model
var Shared = module.exports = mongoose.model('shared', sharedSchema);
module.exports.get = function (callback, limit) {
    Shared.find(callback).limit(limit);
}