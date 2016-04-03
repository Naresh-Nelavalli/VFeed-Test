var mongooseClient = require('mongoose');

var Schema= mongooseClient.Schema;
mongooseClient.connect('mongodb://localhost/foodStore',function(err,res){
if(err){
console.log("Error while connecting DB");
}
else{
console.log('Successfully connected to DB');
}
});


var foodSchema = new Schema({
StoreName:String,
Adress:String,
FoodItems:String
});
var Store = mongooseClient.model('foodstore', foodSchema);

Store.find({},function(err,storedetails){
if(err) console.log(err);

console.log(storedetails);

});

Store.find({StoreName:'Chillies'}, function(err,user){
if(err) throw err;

console.log(user);
});


var newStore = Store({
  StoreName: 'Chillies',
  Adress: 'Wayne PA',
  FoodItems:'Prawn Popcorn'
});

newStore.save(function(err){
if(err) throw err;
console.log('User created');
});

module.exports=foodSchema;