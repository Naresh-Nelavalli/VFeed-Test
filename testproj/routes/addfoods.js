var express = require('express');
var router = express.Router();

/*
 * Post new food.
 */
router.get('/addfoods', function(req, res) {
    res.render('addfoods', { title: 'Add Food' });
});

module.exports = router;
