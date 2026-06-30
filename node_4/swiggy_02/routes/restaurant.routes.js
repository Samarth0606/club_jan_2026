const { createRestaurant, fetchRestaurant, updateRestaurant, deleteRestaurant } = require("../controller/restaurant.controller");


function restaurantRoutes(app){
    // create
    app.post('/api/restaurants', createRestaurant);
    // read
    app.get('/api/restaurants', fetchRestaurant);
    // update
    app.patch('/api/restaurants/:id', updateRestaurant);
    // delete
    app.delete('/api/restaurants/:id', deleteRestaurant);
}

module.exports = restaurantRoutes;







