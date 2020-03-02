// Import shared model
Shared = require('./sharedModel');
// Handle index actions
exports.index = function (req, res) {
    Shared.get(function (err, folders) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        
        res.json({
            status: "success",
            message: "folders retrieved successfully",
            data: folders
        });
    });
};
// Handle create shared actions
exports.new = function (req, res) {
    var shared = new Shared();
    shared.folder = req.body.folder ? req.body.folder : shared.folder;
    shared.users = req.body.users;
    
    shared.save(function (err) {
         if (err)
             res.json(err);
        res.json({
            message: 'New shared created!',
            data: shared
        });
    });
}

// Handle view shared info
exports.view = function (req, res) {
    console.log("View "+req.params.shared_id)
    Shared.findById(req.params.shared_id, function (err, shared) {
        if (err)
            res.send(err);
        res.json({
            message: 'shared details loading..',
            data: shared
        });
    });
};

// Handle update shared info
exports.update = function (req, res) {Shared.findById(req.params.shared_id, function (err, shared) {
        if (err)
            res.send(err);
        shared.folder = req.body.folder ? req.body.folder : shared.folder;
        shared.users = req.body.users;
        shared.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Shared Info updated',
                data: shared
            });
        });
    });
};

// Handle delete shared
exports.delete = function (req, res) {
    Shared.deleteOne({
        _id: req.params.shared_id
    }, function (err, shared) {
        if (err)
            res.send(err);res.json({
            status: "success",
            message: 'Shared deleted'
        });
    });
};