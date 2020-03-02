// Filename: api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to Clouddriven crafted with love!'
    });
});

var shareCntrl = require('./sharedController');
 router.route('/folders').get(shareCntrl.index).post(shareCntrl.new);
 router.route('/folder/:shared_id').get(shareCntrl.view)
 .patch(shareCntrl.update)
 .put(shareCntrl.update)
 .delete(shareCntrl.delete);

 var noteCntrl = require('./notesController');
 router.route('/notes').get(noteCntrl.index).post(noteCntrl.new);
 router.route('/note/:note_id').get(noteCntrl.view)
 .put(noteCntrl.update)
 .patch(noteCntrl.update)
 .delete(noteCntrl.delete)


// Export API routes
module.exports = router;