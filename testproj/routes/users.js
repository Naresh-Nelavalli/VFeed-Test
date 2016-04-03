var express = require('express');
var router = express.Router();

/*
 * GET userlist.
 */
router.get('/foodstores', function(req, res) {
    var db = req.db;
    var collection = db.get('foodstores');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

module.exports = router;
