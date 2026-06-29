// write db

const mongoose  = require('mongoose');

//schema
const restaurantSchema = new mongoose.Schema({
  name: String,
  imgUrl: String,
  rating: Number,
  cuisines: String,
  deliveryTime: String
});

//model
const RestaurantModel = mongoose.model('Restaurant', restaurantSchema);

module.exports = RestaurantModel;



