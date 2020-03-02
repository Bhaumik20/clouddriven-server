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

var cntrl = require('./sharedController');
 router.route('/folders').get(cntrl.index).post(cntrl.new);
 router.route('/folder/:shared_id').get(cntrl.view)
 .patch(cntrl.update)
 .put(cntrl.update)
 .delete(cntrl.delete);

// Export API routes
module.exports = router;