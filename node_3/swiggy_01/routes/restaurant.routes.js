const { createRestaurant, fetchRestaurant } = require("../controller/restaurant.controller");


function restaurantRoutes(app){
    // create
    app.post('/api/restaurants', createRestaurant);
    // read
    app.get('/api/restaurants', fetchRestaurant);

    // update
    // app.patch();
    // delete
    // app.delete();
}

module.exports = restaurantRoutes;







