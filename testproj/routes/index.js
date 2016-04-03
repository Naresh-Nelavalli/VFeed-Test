var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'VFEED' });
});

router.get('/addfoods', function(req, res) {
    res.render('addfoods', { title: 'Add Food' });
});


router.post('/addfoods', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var StoreName = req.body.StoreName;
    var Adress = req.body.Adress;
    var FoodItems = req.body.FoodItems;	

    // Set our collection
    var collection =  db.get('foodstores');

    // Submit to the DB
    collection.insert({
        "StoreName" : StoreName,
        "Adress" : Adress,
        "FoodItems" : FoodItems 
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.redirect("users/foodstores");
        }
    });
});




module.exports = router;
