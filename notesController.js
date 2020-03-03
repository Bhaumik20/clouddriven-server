// Import note model
Note = require('./noteModel');
// Handle index actions
exports.index = function (req, res) {
    console.log("Notes")
    Note.get(function (err, notes) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        
        res.json({
            status: "success",
            message: "Notes retrieved successfully",
            data: notes
        });
    });
};

exports.new = function (req, res) {
    var note = new Note();
    note.title = req.body.title ? req.body.title : note.title;
    note.text = req.body.text ? req.body.text : note.text;
    note.owner = req.body.owner;
    
    note.save(function (err) {
         if (err)
             res.json(err);
        res.json({
            message: 'New note created!',
            data: note
        });
    });
}

exports.view = function (req, res) {
    Note.findById(req.params.note_id, function (err, note) {
        if (err)
            res.send(err);
        res.json({
            message: 'note details loading..',
            data: note
        });
    });
};

exports.update = function (req, res) {
    Note.findById(req.params.note_id, function (err, note) {
    if (err)
        res.send(err);
    note.title = req.body.title ? req.body.title : note.title;
    note.text = req.body.text ? req.body.text : note.text;
    note.owner = req.body.owner;
    note.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: 'Note Info updated',
            data: note
        });
    });
});
};

exports.delete = function (req, res) {
    Note.deleteOne({
        _id: req.params.note_id
    }, function (err, note) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Note deleted'
        });
    });
};

